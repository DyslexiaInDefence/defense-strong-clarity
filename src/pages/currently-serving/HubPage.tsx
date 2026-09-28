import { Link } from "@/lib/router-compat";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HubPage = () => (
  <div className="py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Currently Serving Hub</h1>
      <p className="mb-12 text-lg text-muted-foreground">
        This hub is for anyone currently serving. Find practical help on getting a dyslexia assessment and where to go for support.
      </p>

      <Link to="/currently-serving/standard-learning-credits" className="group mb-10 block rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring">
        <Card className="border-2 transition-colors hover:border-primary">
          <CardContent className="p-6 md:p-8">
            <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">All services</span>
            <GraduationCap className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mb-3 text-2xl font-bold text-foreground">How to use your Standard Learning Credits to pay for a diagnosis</h2>
            <span className="inline-flex items-center text-sm font-semibold text-primary">
              Read the guide <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </span>
          </CardContent>
        </Card>
      </Link>

      <Link to="/currently-serving/army-education-centres" className="group block rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring">
        <Card className="transition-colors hover:border-primary">
          <CardContent className="p-6">
            <span className="mb-3 inline-block rounded-full border border-primary px-3 py-1 text-xs font-bold text-primary">Army only</span>
            <MapPin className="mb-2 h-6 w-6 text-primary" aria-hidden="true" />
            <h2 className="mb-2 text-lg font-bold text-foreground">Where to get support: find your local Army Education Centre</h2>
            <span className="inline-flex items-center text-sm font-semibold text-primary">
              Find a centre <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </div>
  </div>
);

export default HubPage;
