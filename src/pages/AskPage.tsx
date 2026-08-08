import AskForm from "@/components/AskForm";

const AskPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Ask the Community</h1>
          <p className="text-lg text-muted-foreground">
            Plain-English answers from people who've been there. Send a question and we'll reply by email.
          </p>
        </div>

        <div className="max-w-2xl">
          <AskForm />
        </div>

        <div className="mt-8 max-w-2xl rounded-lg border border-border bg-card p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">Prefer to chat?</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Join our Discord community to ask questions and connect with serving personnel, veterans,
            civil servants, families, and industry.
          </p>
          <a
            href="https://discord.com/invite/XhjNGsbny"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Join the Discord community
          </a>
        </div>
      </div>
    </div>
  );
};

export default AskPage;