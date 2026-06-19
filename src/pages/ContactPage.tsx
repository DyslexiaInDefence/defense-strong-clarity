import { Mail, ExternalLink } from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Contact the Dyslexia in Defence team directly.",
    link: "mailto:contact@dyslexiaindefence.com",
    display: "contact@dyslexiaindefence.com",
    external: false,
  },
  {
    icon: LinkedInIcon,
    title: "LinkedIn Community",
    description: "Connect with the wider Dyslexia in Defence community on LinkedIn.",
    link: "https://www.linkedin.com/groups/19133015",
    display: "linkedin.com/groups/19133015",
    external: true,
  },
  {
    icon: DiscordIcon,
    title: "Discord Community",
    description: "Join conversations, ask questions, and connect with serving personnel, veterans, and supporters.",
    link: "https://discord.gg/buzVBdetf",
    display: "discord.gg/buzVBdetf",
    external: true,
  },
];

const ContactPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Whether you have a question, want to get involved, or simply want to connect with others, we'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.link}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="mb-4 h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="mb-2 text-lg font-bold text-foreground">{method.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground">{method.description}</p>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                  {method.display}
                  {method.external && <ExternalLink className="ml-1.5 h-4 w-4" aria-hidden="true" />}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <h2 className="mb-2 text-base font-semibold text-foreground">Legal details</h2>
          <p>Dyslexia in Defence CIC</p>
          <p>Company number: 17285330</p>
          <p>Registered in England and Wales</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
