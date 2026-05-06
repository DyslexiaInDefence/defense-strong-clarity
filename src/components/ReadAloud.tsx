import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Play, Pause, Square, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Site-wide "Read this page aloud" control.
 *
 * - Uses the browser's SpeechSynthesis API (no external deps).
 * - Reads only meaningful content (h1–h4, p, li, blockquote, figcaption)
 *   from the nearest readable region. Skips nav, footer, aside, buttons,
 *   form controls, and anything marked with [data-no-read].
 * - Stops automatically on route change or unmount.
 * - Only one ReadAloud instance speaks at a time (a global stop is issued
 *   whenever any instance starts).
 */

interface ReadAloudProps {
  /**
   * CSS selector for the readable root, evaluated against `document`.
   * Defaults to the nearest enclosing <main> element.
   */
  rootSelector?: string;
  /** Optional explicit pre-built text. If provided, DOM scanning is skipped. */
  text?: string;
  /** Visual variant. */
  className?: string;
  /** Label shown next to the controls. */
  label?: string;
}

const READ_TAGS = ["H1", "H2", "H3", "H4", "P", "LI", "BLOCKQUOTE", "FIGCAPTION"];
const SKIP_SELECTOR =
  "nav, footer, aside, header[role='banner'], [role='navigation'], [data-no-read], [aria-hidden='true'], button, a[role='button'], form, input, textarea, select, label, .sr-only";

function collectText(root: HTMLElement): string {
  const parts: string[] = [];
  const seen = new Set<HTMLElement>();

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const el = node as HTMLElement;
      if (el.closest(SKIP_SELECTOR) && el.closest(SKIP_SELECTOR) !== root) {
        return NodeFilter.FILTER_REJECT;
      }
      if (READ_TAGS.includes(el.tagName)) return NodeFilter.FILTER_ACCEPT;
      if (el.tagName === "IMG") return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    },
  });

  let current = walker.nextNode() as HTMLElement | null;
  while (current) {
    if (current.tagName === "IMG") {
      const alt = (current as HTMLImageElement).alt?.trim();
      // Only meaningful alt text (decorative images usually have empty alt
      // or very short labels).
      if (alt && alt.length > 12) {
        parts.push(`Image description: ${alt}.`);
      }
    } else if (!seen.has(current)) {
      // Avoid double-reading nested LIs (parent UL/OL is skipped, but each
      // LI is accepted; nested LIs would otherwise be repeated by parent
      // text capture). We use textContent per element directly.
      const text = (current.innerText || current.textContent || "")
        .replace(/\s+/g, " ")
        .trim();
      if (text) {
        // Mark descendants as seen so nested matching elements aren't
        // duplicated.
        current.querySelectorAll(READ_TAGS.join(",")).forEach((d) => {
          seen.add(d as HTMLElement);
        });
        // Add a trailing period for headings/list items so TTS pauses.
        parts.push(/[.!?]$/.test(text) ? text : `${text}.`);
      }
    }
    current = walker.nextNode() as HTMLElement | null;
  }

  return parts.join(" ");
}

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;
  const preferred = [
    /en-GB.*(Neural|Natural|Online|Premium)/i,
    /Google UK English Female/i,
    /Google UK English Male/i,
    /Microsoft.*(Libby|Sonia|Ryan|Thomas).*Online/i,
    /^en-GB/i,
    /Daniel/i, // Apple UK voice
    /Serena/i, // Apple UK voice
    /Kate/i,
    /^en[-_]/i,
  ];
  for (const re of preferred) {
    const match = voices.find((v) => re.test(v.name) || re.test(v.lang));
    if (match) return match;
  }
  return voices[0];
}

const ReadAloud = ({
  rootSelector,
  text,
  className,
  label = "Read this page aloud",
}: ReadAloudProps) => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(true);
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [rate, setRate] = useState(1);

  // Detect support.
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
    }
  }, []);

  // Load voices (some browsers populate asynchronously).
  useEffect(() => {
    if (!supported) return;
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener?.("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener?.("voiceschanged", load);
    };
  }, [supported]);

  const voice = useMemo(() => pickVoice(voices), [voices]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setStatus("idle");
  }, [supported]);

  // Stop on route change / unmount.
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setStatus("idle");
    }
  }, [pathname]);

  const play = useCallback(() => {
    if (!supported) return;
    // Resume if paused.
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
      return;
    }

    // Always start clean — only one page reads at a time.
    window.speechSynthesis.cancel();

    let source = text;
    if (!source) {
      const root = rootSelector
        ? (document.querySelector(rootSelector) as HTMLElement | null)
        : (containerRef.current?.closest("main") as HTMLElement | null) ||
          (document.querySelector("main") as HTMLElement | null);
      if (!root) return;
      source = collectText(root);
    }
    if (!source || source.length < 2) return;

    // Chunk to keep utterances under engine limits and improve responsiveness.
    const chunks =
      source.match(/[^.!?]+[.!?]+["')\]]*\s*|.+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [
        source,
      ];

    let cancelled = false;
    const speakNext = (i: number) => {
      if (cancelled || i >= chunks.length) {
        if (!cancelled) setStatus("idle");
        return;
      }
      const u = new SpeechSynthesisUtterance(chunks[i]);
      if (voice) u.voice = voice;
      u.lang = voice?.lang || "en-GB";
      u.rate = rate;
      u.pitch = 1;
      u.onend = () => speakNext(i + 1);
      u.onerror = () => speakNext(i + 1);
      window.speechSynthesis.speak(u);
    };

    setStatus("playing");
    speakNext(0);

    // Cancel handle (none needed here — global cancel covers it).
    void cancelled;
  }, [supported, status, text, rootSelector, voice, rate]);

  const pause = useCallback(() => {
    if (!supported) return;
    if (status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  }, [supported, status]);

  if (!supported) {
    return (
      <div
        data-no-read
        className={cn(
          "my-4 flex w-full items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground",
          className,
        )}
        role="note"
      >
        <Volume2 className="h-4 w-4" aria-hidden="true" />
        <span>Read aloud is not available in this browser</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      data-no-read
      className={cn(
        "my-4 flex w-full flex-wrap items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-sm sm:w-auto sm:inline-flex",
        className,
      )}
      role="region"
      aria-label="Read page aloud controls"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <Volume2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span className="truncate font-medium text-foreground">{label}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {status !== "playing" ? (
          <button
            type="button"
            onClick={play}
            aria-label={status === "paused" ? "Resume reading" : "Start reading"}
            className="inline-flex h-11 min-w-[44px] items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            <span>{status === "paused" ? "Resume" : "Play"}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={pause}
            aria-label="Pause reading"
            className="inline-flex h-11 min-w-[44px] items-center justify-center gap-1.5 rounded-md bg-secondary px-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Pause className="h-4 w-4" aria-hidden="true" />
            <span>Pause</span>
          </button>
        )}
        <button
          type="button"
          onClick={stop}
          disabled={status === "idle"}
          aria-label="Stop reading"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Square className="h-4 w-4" aria-hidden="true" />
        </button>
        <select
          value={rate}
          onChange={(e) => {
            const newRate = Number(e.target.value);
            setRate(newRate);
            if (status !== "idle") {
              window.speechSynthesis.cancel();
              setStatus("idle");
            }
          }}
          className="h-11 rounded-md border border-border bg-background px-2 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Playback speed"
        >
          <option value={0.85}>0.85×</option>
          <option value={1}>1×</option>
          <option value={1.15}>1.15×</option>
          <option value={1.3}>1.3×</option>
        </select>
      </div>
      {status === "paused" && (
        <span className="text-xs text-muted-foreground">Paused</span>
      )}
    </div>
  );
};

export default ReadAloud;