const RECIPIENT = "contact@dyslexiaindefence.com";

const SUBJECT = "Sharing my lived experience of dyslexia in Defence";

// Joined with \r\n so encodeURIComponent emits %0D%0A line breaks, which most
// mail clients need for a readable pre-filled body.
const BODY = [
  "Hello Dyslexia in Defence team,",
  "",
  "I would like to share my lived experience.",
  "",
  "About me (optional, delete anything you would rather not share):",
  "- My connection to Defence (for example serving, veteran, reservist, family member, employer, or thinking of joining):",
  "- Service or organisation (optional):",
  "",
  "My experience:",
  "[Write your story here. A few sentences is fine.]",
  "",
  "What helped, or what would have helped:",
  "[Optional]",
  "",
  "Can we share your story?",
  "Please delete the options that do not apply:",
  "- Yes, with my name",
  "- Yes, anonymously",
  "- No, please keep this private. I just wanted to tell you.",
  "",
  "Thank you,",
  "[Your name]",
].join("\r\n");

export const SHARE_MAILTO = `mailto:${RECIPIENT}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const ShareLivedExperienceBanner = () => (
  <section
    aria-label="Share your lived experience"
    className="w-full border-b border-brand-navy-foreground/15 bg-brand-navy text-brand-navy-foreground"
  >
    <div className="container mx-auto flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="max-w-2xl">
        <p className="text-base font-bold leading-snug sm:text-lg">Share your lived experience</p>
        <p className="mt-1 text-sm leading-relaxed sm:text-base">
          Dyslexic in Defence, or supporting someone who is? Your story helps others feel less alone
          and helps us show what real support looks like.
        </p>
      </div>
      <a
        href={SHARE_MAILTO}
        className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-brand-gold px-6 py-2.5 text-base font-bold no-underline text-brand-gold-foreground transition-colors hover:bg-brand-gold/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
      >
        Share your story
      </a>
    </div>
  </section>
);

export default ShareLivedExperienceBanner;
