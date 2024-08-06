import MaxStartBalance from "./max-start-balance";
import MaxEODBalance from "./max-eod-balance";
import MaxMDBalance from "./max-md-balance";
import MaxMATBalance from "./max-mat-balance";

export default function MaxDrawdown() {
  return (
    <div className="w-full grid sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4 mt-3">
      <MaxStartBalance />
      <MaxEODBalance />
      <MaxMATBalance />
      <MaxMDBalance />
    </div>
  );
}
