import didLogoFull from "@/assets/did-logo-full.webp";
import covenantLogo from "@/assets/armed-forces-covenant-logo-positive.png.asset.json";

type CovenantLogoLockupProps = {
  compact?: boolean;
};

const CovenantLogoLockup = ({ compact = false }: CovenantLogoLockupProps) => (
  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center" aria-label="Dyslexia in Defence and Armed Forces Covenant">
    <img
      src={didLogoFull}
      alt="Dyslexia in Defence"
      className={compact ? "h-40 w-auto object-contain" : "h-48 w-auto object-contain"}
    />
    <div className="hidden self-stretch border-l border-border sm:block" aria-hidden="true" />
    <div className="w-px self-stretch border-t border-border sm:hidden" aria-hidden="true" />
    <div className="bg-card p-3">
      <img
        src={covenantLogo.url}
        alt="Armed Forces Covenant"
        className={compact ? "h-auto w-20 object-contain" : "h-auto w-24 object-contain"}
      />
    </div>
  </div>
);

export default CovenantLogoLockup;