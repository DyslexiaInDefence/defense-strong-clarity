import { Link } from "react-router-dom";
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

        <div className="max-w-2xl">
          <JoinForm />
        </div>

        <div className="mt-8 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            Looking for ongoing support and conversation? Join our{" "}
            <Link to="/community" className="font-medium text-primary underline-offset-4 hover:underline">
              community on Discord
            </Link>{" "}
            to connect with others who understand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
