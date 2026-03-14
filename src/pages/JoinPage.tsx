import { Button } from "@/components/ui/button";
import JoinForm from "@/components/JoinForm";

const JoinPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Join the Network</h1>
          <p className="text-lg text-muted-foreground">
            Open to anyone connected to the defence and security sector.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <JoinForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
