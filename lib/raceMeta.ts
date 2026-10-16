// Shared party/status styling for candidate cards, used by the RaceCard on
// both /primary and /general. Kept in one place so the two pages can't drift
// (they had — /general was missing the Progressive chip and the "withdrawn"
// status, so a Progressive candidate or a dropped-out candidate rendered wrong).

// Party chips use the colors readers already associate with each party
// (blue for Democrats, red for Republicans, green for Progressives, gray for
// independents) so a chip never has to be decoded. The two Vermont minor
// parties have no widely recognized color, so they get distinct hues that
// don't collide with the major ones. Hues were checked side by side in the
// busiest race (Governor: Dem/Prog, Republican, Independent, Peace and
// Justice, Freedom and Unity).
//
// A fusion label ("Dem/Prog", "Dem/Rep") takes the color of the first party
// listed; the chip text and tooltip spell out the full nomination.
// "Unity Party" only appears in the archived primary data (races.json).
const partyHues: Record<string, string> = {
  "Democratic": "bg-blue-50 text-blue-700 border-blue-200",
  "Democrat": "bg-blue-50 text-blue-700 border-blue-200",
  "Dem/Prog": "bg-blue-50 text-blue-700 border-blue-200",
  "Dem/Rep": "bg-blue-50 text-blue-700 border-blue-200",
  "Republican": "bg-red-50 text-red-700 border-red-200",
  "Progressive": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Independent": "bg-warmgray-100 text-warmgray-700 border-warmgray-200",
  "Freedom and Unity": "bg-amber-50 text-amber-800 border-amber-200",
  "Unity Party": "bg-amber-50 text-amber-800 border-amber-200",
  "Peace and Justice": "bg-purple-50 text-purple-700 border-purple-200",
};

const partyHueFallback = "bg-warmgray-100 text-warmgray-700 border-warmgray-200";

// Works for both the November ballot labels ("Democratic") and the party
// names used in the primary data ("Democrat").
export function partyChipClass(label: string): string {
  return partyHues[label] || partyHueFallback;
}

export const statusColors: Record<string, string> = {
  "running": "bg-sage-100 text-sage-700",
  "likely-running": "bg-sage-50 text-sage-600",
  "announced": "bg-sage-100 text-sage-700",
  "retiring": "bg-warmgray-100 text-warmgray-600",
  "withdrawn": "bg-warmgray-100 text-warmgray-600",
  "unknown": "bg-cream-100 text-warmgray-600",
};

export const statusLabels: Record<string, string> = {
  "running": "Running for reelection",
  "likely-running": "Likely running",
  "announced": "Announced",
  "retiring": "Retiring",
  "withdrawn": "On the ballot · campaign ended",
  "unknown": "Plans not announced",
};

// November ballot labels are printed exactly as on the ballot. A fusion label
// ("Dem/Prog", "Dem/Rep") means more than one party nominated the candidate;
// the chip gets a tooltip spelling that out.
export const ballotLabelTitle: Record<string, string> = {
  "Dem/Prog": "Nominated by the Democratic and Progressive parties",
  "Dem/Rep": "Nominated by the Democratic and Republican parties",
};
