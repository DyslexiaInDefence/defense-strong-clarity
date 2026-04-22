const ALLEN_URL =
  "https://www.tandfonline.com/doi/epdf/10.1080/09585192.2023.2293066?needAccess=true";

/**
 * Subtle inline citation for Allen et al. (2023) — neurodiverse UK military veterans study.
 * Use sparingly: max 1 per page (2 if absolutely necessary).
 */
const AllenCitation = () => (
  <a
    href={ALLEN_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground underline decoration-dotted underline-offset-2 hover:text-primary"
    aria-label="Open Allen et al. 2023 study (opens in new tab)"
  >
    (Allen et al., 2023)
  </a>
);

export default AllenCitation;
