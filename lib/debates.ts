import debatesData from "@/data/debates.json";

export type DebateEvent = {
  raceIds: string[];
  kind: "debate" | "forum" | "interview";
  title: string;
  host: string;
  date: string; // YYYY-MM-DD, the host's listed broadcast date
  participants: string;
  format: string;
  url: string;
};

export const debateSchedules = debatesData.schedules as { title: string; url: string }[];

const events = debatesData.events as DebateEvent[];

/** Recorded debates, forums and interviews for one race or ballot measure, newest first. */
export function debatesFor(id: string): DebateEvent[] {
  return events
    .filter((e) => e.raceIds.includes(id))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export const kindLabel: Record<DebateEvent["kind"], string> = {
  debate: "Debate",
  forum: "Forum",
  interview: "Interview",
};

export function shortDate(iso: string): string {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
