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
      </div>
    </div>
  );
};

export default AskPage;