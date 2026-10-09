// Shared party/status styling for candidate cards, used by the RaceCard on
// both /primary and /general. Kept in one place so the two pages can't drift
// (they had — /general was missing the Progressive chip and the "withdrawn"
// status, so a Progressive candidate or a dropped-out candidate rendered wrong).

export const partyColors: Record<string, string> = {
  "Democrat": "bg-blue-50 text-blue-700 border-blue-100",
  "Republican": "bg-red-50 text-red-700 border-red-100",
  "Progressive": "bg-teal-50 text-teal-700 border-teal-100",
  "Independent": "bg-purple-50 text-purple-700 border-purple-100",
  "Peace and Justice": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Unity Party": "bg-amber-50 text-amber-700 border-amber-100",
  "Freedom and Unity": "bg-orange-50 text-orange-700 border-orange-100",
};

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

// November ballot labels, printed exactly as on the ballot. A fusion label
// ("Dem/Prog", "Dem/Rep") means more than one party nominated the candidate;
// the chip takes the color of the first party listed.
export const ballotLabelParty: Record<string, string> = {
  "Democratic": "Democrat",
  "Republican": "Republican",
  "Progressive": "Progressive",
  "Independent": "Independent",
  "Dem/Prog": "Democrat",
  "Dem/Rep": "Democrat",
  "Freedom and Unity": "Freedom and Unity",
  "Peace and Justice": "Peace and Justice",
};

export const ballotLabelTitle: Record<string, string> = {
  "Dem/Prog": "Nominated by the Democratic and Progressive parties",
  "Dem/Rep": "Nominated by the Democratic and Republican parties",
};

export function ballotLabelClass(label: string): string {
  return partyColors[ballotLabelParty[label] ?? ""] || "bg-warmgray-50 text-warmgray-600 border-warmgray-100";
}
