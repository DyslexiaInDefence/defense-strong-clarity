import { Link } from "react-router-dom";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinForm from "@/components/JoinForm";

const JoinPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Join the Network</h1>
          <p className="text-lg text-muted-foreground">
            Register your interest to become part of the Dyslexia in Defence peer community. Membership is open to anyone with a connection to the defence and security sector.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <JoinForm />
          </div>
          <div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Handshake className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
              <h2 className="mb-2 text-lg font-bold text-foreground">Partner Enquiries</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                If you represent an organisation interested in supporting or partnering with Dyslexia in Defence, we welcome your enquiry.
              </p>
              <Link to="/partner">
                <Button variant="outline" className="w-full">Learn About Partnership</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
