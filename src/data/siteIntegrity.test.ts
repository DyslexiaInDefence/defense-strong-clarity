import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { LIVED_EXPERIENCES_BASE, livedStories } from "./livedStories";
import { armyEducationCentres, OVERSEAS_AEC } from "./armyEducationCentres";
import { SARAH_EMAIL, SARAH_MAILTO, SLC_COST_OPTIONS, SLC_TEMPLATE_FORM } from "../pages/support/slcContent";
import { SHARE_MAILTO } from "../components/ShareLivedExperienceBanner";

// Switch-over step 6: link, email, download and image checks across every live source file.

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

const read = (path: string) => readFileSync(path, "utf8");
const SOURCE = files("src").filter(path => /\.tsx?$/.test(path) && !path.includes(".test.") && !path.startsWith("src/pages/_old/") && !path.endsWith("routeTree.gen.ts"));

const routes = () => {
  const map = new Map<string, boolean>();
  for (const path of files("src/routes")) {
    const source = read(path);
    const route = source.match(/createFileRoute\("([^"]+)"\)/)?.[1];
    if (route) map.set(route === "/" ? "/" : route.replace(/\/$/, ""), /throw redirect\(/.test(source));
  }
  return map;
};
const normalise = (to: string) => {
  const path = to.split(/[?#]/)[0] ?? "";
  return path.length > 1 ? path.replace(/\/$/, "") : path;
};
const STATIC_FILE = /\.(pdf|docx?|png|jpe?g|webp|svg|html|xml|txt|ico)$/i;

describe("Internal links", () => {
  it("points every internal link in src at an existing page, not a redirect, a -preview address or a missing page", () => {
    const known = routes();
    const failures: string[] = [];
    for (const path of SOURCE) {
      read(path).split("\n").forEach((line, i) => {
        for (const match of line.matchAll(/\b(?:to|href|path)(?:=|:\s*)["'`](\/[^"'`\s$]*)["'`]/g)) {
          const target = normalise(match[1] ?? "");
          if (STATIC_FILE.test(target)) continue;
          if (target.includes("-preview")) failures.push(`${path}:${i + 1} -preview ${target}`);
          if (!known.has(target)) failures.push(`${path}:${i + 1} missing ${target}`);
          else if (known.get(target)) failures.push(`${path}:${i + 1} redirect ${target}`);
        }
      });
    }
    expect(failures).toEqual([]);
  });

  it("builds every story link from a story that has its own page", () => {
    const known = routes();
    for (const story of livedStories) {
      const path = `${LIVED_EXPERIENCES_BASE}/${story.slug}`;
      expect(known.has(path), path).toBe(true);
      expect(known.get(path), path).toBe(false);
    }
  });
});

describe("Email links", () => {
  const OUR_ADDRESS = "contact@dyslexiaindefence.com";

  it("uses only contact@dyslexiaindefence.com in written mailto links", () => {
    const addresses = SOURCE.flatMap(path => [...read(path).matchAll(/mailto:([^"'`?\s)}$]+)/g)].map(m => `${path}: ${m[1]}`));
    expect(addresses.length).toBeGreaterThan(5);
    for (const entry of addresses) expect(entry.split(": ")[1], entry).toBe(OUR_ADDRESS);
  });

  it("uses no other dyslexiaindefence.com address in the site's own source", () => {
    for (const path of SOURCE) {
      for (const match of read(path).matchAll(/[A-Za-z0-9._%+-]+@dyslexiaindefence\.com/g)) expect(match[0], path).toBe(OUR_ADDRESS);
    }
  });

  it("sends the share-your-story link to contact@ and the assessor link to the agreed Sarah Hickinbotham address", () => {
    expect(SHARE_MAILTO.startsWith(`mailto:${OUR_ADDRESS}?`)).toBe(true);
    expect(SARAH_EMAIL).toBe("hello@adultdyslexiaservices.co.uk");
    expect(SARAH_MAILTO.startsWith(`mailto:${SARAH_EMAIL}?`)).toBe(true);
  });

  it("builds every other mailto link only from the Army Education Centre mailboxes (documented exception)", () => {
    // Exception: the Army Education Centres page and map, live before the switch-over, link to each centre's own MOD mailbox.
    const dynamic = SOURCE.flatMap(path => [...read(path).matchAll(/mailto:\$\{([^}]+)\}/g)].map(m => `${path}: ${m[1]}`));
    expect(dynamic.sort()).toEqual([
      "src/components/AecMap.tsx: escapeHtml(c.email",
      "src/components/ShareLivedExperienceBanner.tsx: RECIPIENT",
      "src/pages/support/ArmyEducationCentresPage.tsx: OVERSEAS_AEC.email",
      "src/pages/support/ArmyEducationCentresPage.tsx: c.email",
      "src/pages/support/slcContent.ts: SARAH_EMAIL",
    ]);
    for (const centre of [...armyEducationCentres, OVERSEAS_AEC]) expect(centre.email, centre.name).toMatch(/^[A-Za-z0-9-]+@mod\.gov\.uk$/);
  });
});

describe("Downloads", () => {
  it("links every /documents/ download to a file in public", () => {
    const targets = SOURCE.flatMap(path => [...read(path).matchAll(/["'`](\/documents\/[^"'`\s]+)["'`]/g)].map(m => m[1] ?? ""));
    expect(targets.length).toBeGreaterThan(0);
    for (const target of targets) expect(existsSync(`public${target}`), target).toBe(true);
  });

  it("imports every hosted file from an asset record that exists and has an address", () => {
    for (const path of SOURCE) {
      for (const match of read(path).matchAll(/from "([^"]+\.asset\.json)"/g)) {
        const spec = match[1] ?? "";
        const file = spec.startsWith("@/") ? join("src", spec.slice(2)) : resolve(dirname(path), spec);
        expect(existsSync(file), `${path} -> ${spec}`).toBe(true);
        expect(JSON.parse(read(file)).url, spec).toMatch(/^\/__l5e\/assets-v1\//);
      }
    }
  });

  it("gives every Standard Learning Credits form a Word file", () => {
    for (const form of [...SLC_COST_OPTIONS.map(option => option.form), SLC_TEMPLATE_FORM]) {
      expect(form.url, form.label).toMatch(/^\/__l5e\/assets-v1\/.+\.docx$/);
      expect(form.filename, form.label).toMatch(/\.docx$/);
    }
  });
});

describe("Images", () => {
  it("gives every image in src an alt attribute", () => {
    const failures: string[] = [];
    for (const path of SOURCE) {
      for (const match of read(path).matchAll(/<img\b[^>]*?\/?>/gs)) if (!/\balt=/.test(match[0])) failures.push(`${path}: ${match[0].slice(0, 80)}`);
    }
    expect(failures).toEqual([]);
  });

  it("shows the Dyslexia in Defence logo in the menu and the footer", () => {
    const navbar = read("src/components/Navbar.tsx");
    expect(navbar).toMatch(/<img alt="Dyslexia in Defence"[^>]*src="\/lovable-uploads\/[^"]+"/);
    const logo = navbar.match(/src="(\/lovable-uploads\/[^"]+)"/)?.[1] ?? "";
    expect(existsSync(`public${logo}`), logo).toBe(true);
    expect(read("src/components/Footer.tsx")).toContain('<img src={didLogoFull} alt="Dyslexia in Defence"');
  });
});
