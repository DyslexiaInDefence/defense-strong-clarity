import { Link } from "@/lib/router-compat";
import covenantLogo from "@/assets/armed-forces-covenant-logo-positive.png.asset.json";

const HomeCovenantStrip = () => (
  <section className="border-t border-border py-5" aria-label="Armed Forces Covenant pledge">
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:text-left">
      <div className="bg-card p-3">
        <img
          src={covenantLogo.url}
          alt="Armed Forces Covenant"
          className="h-auto w-20 object-contain"
        />
      </div>
      <div>
        <p className="font-semibold text-foreground">We have signed the Armed Forces Covenant</p>
        <p className="mt-1 text-xs text-muted-foreground">
          A voluntary pledge that does not imply Ministry of Defence endorsement.
        </p>
      </div>
      <Link
        to="/armed-forces-covenant"
        className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Read our pledge
      </Link>
    </div>
  </section>
);

export default HomeCovenantStrip;