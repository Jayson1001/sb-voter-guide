import type { Metadata } from "next";
import Link from "next/link";
import racesData from "@/data/races.json";
import resultsData from "@/data/primary-results.json";
import { partyColors } from "@/lib/raceMeta";

export const metadata: Metadata = {
  title: "August 11 Primary Results — South Burlington Voter Guide",
  description:
    "Results from the August 11, 2026 Vermont primary for South Burlington voters — every race on the Democratic, Progressive, and Republican ballots, statewide and South Burlington totals, plus the Bartlett Bay wastewater bond. Independent and nonpartisan.",
  alternates: { canonical: "/primary-results" },
  openGraph: {
    title: "August 11 Primary Results — South Burlington",
    description:
      "Who won each party's nomination, how South Burlington voted, and the Bartlett Bay bond result.",
    url: "https://www.sbvoterguide.com/primary-results",
  },
};

// ---------------------------------------------------------------------------
// Data shape (see data/primary-results.json). Every number is nullable so the
// page renders while results are still being filled in: nulls show as "—" and
// a top-level status of "placeholder" shows a visible "being finalized" note.
// ---------------------------------------------------------------------------

type Source = { title: string; url: string };

type ResultCandidate = {
  name: string;
  party: string;
  votesStatewide: number | null; // whole-jurisdiction total: state, district, or county
  pctStatewide: number | null;
  votesSB: number | null; // South Burlington only
  pctSB: number | null;
  winner: boolean; // won (or tied for) this party's nomination
  writeIn: boolean;
  withdrawn?: boolean; // name was on the ballot but campaign had ended
};

type Contest = {
  party: string; // ballot name: "Democratic" | "Progressive" | "Republican"
  seats: number;
  totalVotesStatewide: number | null;
  totalVotesSB: number | null;
  writeInsOther: { votesStatewide: number | null; votesSB: number | null };
  blanks?: { votesStatewide: number | null; votesSB: number | null };
  overvotes?: { votesStatewide: number | null; votesSB: number | null };
  candidates: ResultCandidate[];
  note: string | null;
};

type RaceResult = {
  office: string;
  shortName: string;
  district?: string;
  seats: number;
  scopeLabel: string;
  sbUnofficial?: boolean; // SB column comes from the City Clerk's unofficial sheet
  contests: Contest[];
  notes: string | null;
  sources: Source[];
};

type BondResult = {
  id: string;
  title: string;
  amount: string;
  passed: boolean | null;
  votesYes: number | null;
  votesNo: number | null;
  blank?: number | null;
  totalVotes?: number | null;
  checklist?: number | null;
  pctVoted?: number | null;
  pctYes: number | null;
  pctNo: number | null;
  byDistrict?: { district: string; yes: number; no: number }[];
  note: string | null;
  sources: Source[];
};

type PrimaryResults = {
  status: "placeholder" | "partial" | "official";
  lastUpdated: string;
  election: {
    name: string;
    date: string;
    canvassDate: string | null; // date stamped on the SOS official canvass
    southBurlington: {
      ballotsCast: number | null;
      registeredVoters: number | null;
      turnoutPct: number | null;
      ballotsByParty: Record<string, number | null>;
    };
    statewide: { ballotsCast: number | null; registeredVoters: number | null; turnoutPct: number | null };
    summary: string | null;
    sources: Source[];
  };
  races: Record<string, RaceResult>;
  bond: BondResult;
};

const results = resultsData as unknown as PrimaryResults;

// Ballot name ("Democratic") -> the party key used for chip colors ("Democrat").
const ballotToParty: Record<string, string> = {
  Democratic: "Democrat",
  Republican: "Republican",
  Progressive: "Progressive",
};

const fmt = (n: number | null | undefined) => (n == null ? "—" : n.toLocaleString("en-US"));
const pct = (n: number | null | undefined) => (n == null ? "—" : `${n.toFixed(2)}%`);
const fmtDate = (iso: string | null) =>
  iso
    ? new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

// Short column label for the "big" total: Statewide / District / County.
function scopeColumn(race: RaceResult): string {
  if (race.scopeLabel === "Statewide") return "Statewide";
  if (race.scopeLabel.includes("County")) return "County";
  return "District";
}

// Once real numbers land, order by votes (most first). Until then keep the
// JSON order, which is alphabetical by last name — nobody gets top billing.
function orderCandidates(cands: ResultCandidate[]): ResultCandidate[] {
  const hasVotes = cands.some((c) => c.votesStatewide != null);
  if (!hasVotes) return cands;
  return [...cands].sort((a, b) => (b.votesStatewide ?? -1) - (a.votesStatewide ?? -1));
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 inline-block ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// ---------------------------------------------------------------------------
// Pieces
// ---------------------------------------------------------------------------

function ContestTable({ race, contest }: { race: RaceResult; contest: Contest }) {
  const partyKey = ballotToParty[contest.party] || contest.party;
  const chip = partyColors[partyKey] || "bg-warmgray-50 text-warmgray-600 border-warmgray-100";
  const col = scopeColumn(race);
  const has = (x?: { votesStatewide: number | null; votesSB: number | null }) =>
    !!x && (x.votesStatewide != null || x.votesSB != null);
  const extraRows = [
    { label: "All other write-ins", v: contest.writeInsOther },
    { label: "Left blank", v: contest.blanks },
    { label: "Overvotes", v: contest.overvotes },
  ].filter((r) => has(r.v));

  return (
    <div className="mt-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${chip}`}>
          {contest.party} ballot
        </span>
        {contest.seats > 1 && (
          <span className="text-xs text-warmgray-600">
            Top {contest.seats} win nominations
          </span>
        )}
      </div>

      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm min-w-[480px]">
          <caption className="sr-only">
            {race.shortName}
            {race.district ? ` (${race.district})` : ""} — {contest.party} primary results
          </caption>
          <thead>
            <tr className="text-xs text-warmgray-600 uppercase tracking-wide">
              <th scope="col" className="text-left font-semibold py-1.5 px-1">Candidate</th>
              <th scope="col" className="text-right font-semibold py-1.5 px-1">{col} votes</th>
              <th scope="col" className="text-right font-semibold py-1.5 px-1">{col} %</th>
              <th scope="col" className="text-right font-semibold py-1.5 px-1 border-l border-warmgray-100">SB votes</th>
              <th scope="col" className="text-right font-semibold py-1.5 px-1">SB %</th>
            </tr>
          </thead>
          <tbody>
            {orderCandidates(contest.candidates).map((c) => (
              <tr
                key={c.name}
                className={`border-t border-warmgray-100 ${c.winner ? "bg-sage-50" : ""}`}
              >
                <th scope="row" className="text-left font-normal py-2 px-1">
                  <span className={`text-warmgray-800 ${c.winner ? "font-semibold" : "font-medium"}`}>{c.name}</span>
                  {c.winner && (
                    <span className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full align-middle">
                      <CheckCircleIcon /> Nominated
                    </span>
                  )}
                  {c.writeIn && (
                    <span className="ml-2 text-xs text-warmgray-600 bg-warmgray-100 px-2 py-0.5 rounded-full align-middle">write-in</span>
                  )}
                  {c.withdrawn && (
                    <span className="ml-2 text-xs text-warmgray-600 bg-warmgray-100 px-2 py-0.5 rounded-full align-middle">campaign ended</span>
                  )}
                </th>
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-700">{fmt(c.votesStatewide)}</td>
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-600">{pct(c.pctStatewide)}</td>
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-700 border-l border-warmgray-100">{fmt(c.votesSB)}</td>
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-600">{pct(c.pctSB)}</td>
              </tr>
            ))}
            {extraRows.map((r) => (
              <tr key={r.label} className="border-t border-warmgray-100">
                <th scope="row" className="text-left font-normal py-2 px-1 text-warmgray-600 italic">{r.label}</th>
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-600">{fmt(r.v?.votesStatewide)}</td>
                <td className="text-right py-2 px-1" />
                <td className="text-right tabular-nums py-2 px-1 text-warmgray-600 border-l border-warmgray-100">{fmt(r.v?.votesSB)}</td>
                <td className="text-right py-2 px-1" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {contest.note && <p className="text-xs text-warmgray-600 mt-1.5">{contest.note}</p>}
    </div>
  );
}

function RaceResultCard({ raceId }: { raceId: string }) {
  const race = results.races[raceId];
  if (!race) return null;

  const withCandidates = race.contests.filter((c) => c.candidates.length > 0);
  const empty = race.contests.filter((c) => c.candidates.length === 0).map((c) => c.party);
  const anyWinner = withCandidates.some((c) => c.candidates.some((x) => x.winner));

  return (
    <div className="bg-white rounded-2xl shadow-soft p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {race.district && (
              <span className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide">{race.district}</span>
            )}
            {race.seats > 1 && (
              <span className="text-xs bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full font-medium">{race.seats} seats</span>
            )}
          </div>
          <h3 className="font-display text-lg font-bold text-warmgray-800">{race.shortName}</h3>
          {race.district && <p className="text-warmgray-600 text-sm">{race.office}</p>}
        </div>
        {!anyWinner && (
          <span className="flex-shrink-0 text-xs font-medium text-warmgray-600 bg-cream-100 px-2 py-1 rounded-full">
            Results pending
          </span>
        )}
      </div>

      {race.sbUnofficial && (
        <p className="mt-3 text-xs text-warmgray-700 bg-cream-50 border border-warmgray-200 rounded-lg px-3 py-2">
          South Burlington figures are the City Clerk&apos;s unofficial count; district/county totals are official.
        </p>
      )}

      {withCandidates.map((contest) => (
        <ContestTable key={contest.party} race={race} contest={contest} />
      ))}

      {empty.length > 0 && (
        <p className="text-xs text-warmgray-600 mt-4">
          No candidates were printed on the {empty.join(" or ")} {empty.length > 1 ? "ballots" : "ballot"} for this office.
        </p>
      )}

      {race.notes && (
        <p className="text-xs text-warmgray-600 italic border-t border-warmgray-100 pt-3 mt-4">{race.notes}</p>
      )}

      {race.sources.length > 0 && (
        <p className="text-xs text-warmgray-600 mt-2">
          Source:{" "}
          {race.sources.map((s, i) => (
            <span key={s.url}>
              {i > 0 && " · "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">
                {s.title}
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div id={id} className="mb-5 scroll-mt-32">
      <h2 className="font-display text-xl font-bold text-warmgray-800">{title}</h2>
      {subtitle && <p className="text-warmgray-600 text-sm">{subtitle}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrimaryResultsPage() {
  const { election, bond } = results;
  const isPlaceholder = results.status === "placeholder";
  const isPartial = results.status === "partial";
  const canvass = fmtDate(election.canvassDate);
  const sb = election.southBurlington;

  // Race groups follow data/races.json so this page mirrors /primary exactly.
  const ids = (list: { id: string }[]) => list.map((r) => r.id);
  const groups = {
    statewide: ids(racesData.statewide),
    federal: ids(racesData.federal),
    senate: ids(racesData.stateSenate),
    house: ids(racesData.stateHouse),
    county: ids(racesData.county),
  };

  // Every source cited anywhere in the results file, de-duplicated.
  const allSources: Source[] = [];
  const seen = new Set<string>();
  for (const s of [
    ...election.sources,
    ...Object.values(results.races).flatMap((r) => r.sources),
    ...bond.sources,
  ]) {
    if (!seen.has(s.url)) {
      seen.add(s.url);
      allSources.push(s);
    }
  }

  return (
    <main className="min-h-screen bg-pattern">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warmgray-500 via-warmgray-600 to-warmgray-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-sage-300/30 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Vermont Primary
              <span className="block text-cream-200">Results 2026</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-cream-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarIcon />
                <span className="font-medium">August 11, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPinIcon />
                <span className="font-medium">South Burlington, VT</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-3 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl text-cream-100 font-display font-medium text-base">
                <span>
                  South Burlington: {fmt(sb.ballotsCast)} ballots cast ({pct(sb.turnoutPct)} turnout)
                </span>
                <span className="hidden sm:inline text-cream-200/60">&bull;</span>
                <span>Statewide: {pct(election.statewide.turnoutPct)} turnout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3" />
          </svg>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Placeholder / partial notice — shown until every number is in */}
        {(isPlaceholder || isPartial) && (
          <div role="status" className="bg-cream-50 border-2 border-terracotta-200 rounded-2xl p-5 mb-6 flex items-start gap-3 text-terracotta-800">
            <InfoIcon />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold">{isPartial ? "Some results still being finalized" : "Results being finalized"}</p>
              <p className="text-warmgray-700 mt-0.5">
                We&apos;re checking every number against the official canvass before we post it. Until then you&apos;ll see
                a dash (&mdash;) where a vote count goes. Want it straight from the source? The{" "}
                <a href="https://sos.vermont.gov/elections/" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 underline">
                  Vermont Secretary of State&apos;s elections page
                </a>{" "}
                has the official tallies.
              </p>
            </div>
          </div>
        )}

        {/* Summary + what's next */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗳️</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">
                {isPlaceholder ? "The primary is over" : "The official results"}
              </h2>
              <p className="text-warmgray-600 leading-relaxed">
                {election.summary ??
                  "On August 11, each party picked who goes on to the November ballot. This page shows who won each nomination, the official totals, South Burlington's share, and how the city voted on the Bartlett Bay bond."}
              </p>
              <p className="text-warmgray-600 text-sm leading-relaxed mt-3">
                Quick reminder on how to read this: a primary is a party picking its own team. Winning here means
                you&apos;re on the November ballot, not in office. That part happens November 3.
              </p>
              <Link
                href="/general"
                className="inline-flex items-center gap-2 mt-4 bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                Now: the November 3 general election
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* How to read the tables */}
        <div className="bg-cream-50 border border-warmgray-200 rounded-xl p-4 mb-8 text-sm text-warmgray-600 leading-relaxed">
          <p>
            <strong className="text-warmgray-700">Reading the tables:</strong> each office shows one table per party
            ballot. The first pair of columns is the whole race (statewide, or the whole district or county); the
            &ldquo;SB&rdquo; columns are South Burlington&apos;s share of it. A green row means that candidate won the
            nomination (in races with more than one seat, more than one person wins). Candidates are listed by votes.
            A dash (&mdash;) means that figure isn&apos;t broken out in the official files we used.
          </p>
        </div>

        {/* Jump bar — mirrors /primary */}
        <nav
          aria-label="Jump to a race or the bond"
          className="sticky top-14 z-30 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 bg-white/95 backdrop-blur-sm border border-warmgray-200 rounded-xl shadow-soft"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 overflow-x-auto lg:justify-between">
            <span className="flex-shrink-0 text-xs font-semibold text-warmgray-600 uppercase tracking-wide pr-1">Jump to</span>
            {[
              { href: "#statewide", label: "Statewide" },
              { href: "#federal", label: "U.S. House" },
              { href: "#senate", label: "State Senate" },
              { href: "#house", label: "State House" },
              { href: "#county", label: "County offices" },
              { href: "#bond", label: "Bartlett Bay bond" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                className={`flex-shrink-0 inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  s.href === "#bond"
                    ? "bg-terracotta-100 text-terracotta-700 hover:bg-terracotta-200"
                    : "bg-warmgray-100 text-warmgray-700 hover:bg-warmgray-200"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>

        <section className="mb-10">
          <SectionHeading id="statewide" title="Vermont Statewide Offices" />
          <div className="space-y-5">
            {groups.statewide.map((id) => <RaceResultCard key={id} raceId={id} />)}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading id="federal" title="Federal Office" subtitle="Vermont's one seat in the U.S. House" />
          <div className="space-y-5">
            {groups.federal.map((id) => <RaceResultCard key={id} raceId={id} />)}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading id="senate" title="Vermont State Senate" subtitle="Chittenden Southeast district" />
          <div className="space-y-5">
            {groups.senate.map((id) => <RaceResultCard key={id} raceId={id} />)}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading
            id="house"
            title="Vermont House of Representatives"
            subtitle="South Burlington spans five House districts — the SB columns cover only the South Burlington part of each"
          />
          <div className="grid lg:grid-cols-2 gap-5">
            {groups.house.map((id) => <RaceResultCard key={id} raceId={id} />)}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeading id="county" title="Chittenden County Offices" subtitle="Same for every South Burlington voter" />
          <div className="space-y-5">
            {groups.county.map((id) => <RaceResultCard key={id} raceId={id} />)}
          </div>
        </section>

        {/* Bartlett Bay bond result */}
        <section id="bond" className="mb-10 scroll-mt-32">
          <div className="bg-white rounded-2xl shadow-soft border-2 border-terracotta-200 overflow-hidden">
            <div className="bg-terracotta-500 text-white px-5 sm:px-6 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide">City ballot item · Every voter got this one</span>
            </div>
            <div className="p-5 sm:p-7">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-warmgray-800 mb-1">
                {bond.amount} for the {bond.title.replace(/ bond$/i, "")}
              </h2>
              <p className="text-warmgray-600 text-sm mb-4">
                Not a party race — a city question on the same August 11 ballot. Official count from the City of South Burlington.{" "}
                <Link href="/primary#bond" className="text-sage-600 hover:text-sage-800 underline">What it was about</Link>
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                {bond.passed === null ? (
                  <span className="inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full bg-cream-100 text-warmgray-700">
                    Result being finalized
                  </span>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
                      bond.passed ? "bg-sage-100 text-sage-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    <CheckCircleIcon />
                    {bond.passed ? "Approved" : "Rejected"}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="bg-sage-50 rounded-xl p-3">
                  <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide">Yes</p>
                  <p className="font-display text-2xl font-bold text-warmgray-800 tabular-nums">{fmt(bond.votesYes)}</p>
                  {bond.pctYes != null && <p className="text-xs text-warmgray-600 tabular-nums">{pct(bond.pctYes)}</p>}
                </div>
                <div className="bg-warmgray-50 rounded-xl p-3">
                  <p className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide">No</p>
                  <p className="font-display text-2xl font-bold text-warmgray-800 tabular-nums">{fmt(bond.votesNo)}</p>
                  {bond.pctNo != null && <p className="text-xs text-warmgray-600 tabular-nums">{pct(bond.pctNo)}</p>}
                </div>
              </div>

              {(bond.blank != null || bond.totalVotes != null) && (
                <p className="text-sm text-warmgray-600 leading-relaxed mt-4">
                  {bond.blank != null && <>Blank: {fmt(bond.blank)}. </>}
                  {bond.totalVotes != null && <>{fmt(bond.totalVotes)} ballots were cast on the question</>}
                  {bond.checklist != null && <>, out of {fmt(bond.checklist)} voters on the checklist</>}
                  {bond.pctVoted != null && <> ({pct(bond.pctVoted)})</>}
                  {bond.totalVotes != null && "."}
                </p>
              )}

              {bond.byDistrict && bond.byDistrict.length > 0 && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm max-w-md">
                    <caption className="text-left text-xs font-semibold text-warmgray-600 uppercase tracking-wide mb-1">By voting district</caption>
                    <thead>
                      <tr className="text-xs text-warmgray-600">
                        <th scope="col" className="text-left font-semibold py-1 px-1">District</th>
                        <th scope="col" className="text-right font-semibold py-1 px-1">Yes</th>
                        <th scope="col" className="text-right font-semibold py-1 px-1">No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bond.byDistrict.map((r) => (
                        <tr key={r.district} className="border-t border-warmgray-100">
                          <th scope="row" className="text-left font-normal py-1.5 px-1 text-warmgray-700">{r.district}</th>
                          <td className="text-right tabular-nums py-1.5 px-1 text-warmgray-700">{fmt(r.yes)}</td>
                          <td className="text-right tabular-nums py-1.5 px-1 text-warmgray-700">{fmt(r.no)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {bond.note && <p className="text-sm text-warmgray-600 leading-relaxed mt-4">{bond.note}</p>}

              {bond.sources.length > 0 && (
                <p className="text-xs text-warmgray-600 mt-4">
                  Source:{" "}
                  {bond.sources.map((s, i) => (
                    <span key={s.url}>
                      {i > 0 && " · "}
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">
                        {s.title}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Certification + sources */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-gradient-to-r from-warmgray-500 to-warmgray-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><CalendarIcon /></div>
                <div>
                  <p className="text-white/80 text-sm">Vermont Primary &mdash; August 11, 2026</p>
                  <p className="font-display font-bold text-xl">
                    {canvass ? `Official results (canvass dated ${canvass})` : "Official results being posted"}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="https://sos.vermont.gov/elections/election-info-resources/elections-results-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Vermont Secretary of State results
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-lg font-bold text-warmgray-800 mb-3">Sources</h2>
              {allSources.length > 0 ? (
                <ul className="space-y-2">
                  {allSources.map((s) => (
                    <li key={s.url} className="text-sm">
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 underline">
                        {s.title}
                        <ExternalLinkIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-warmgray-600">Official result sources will be listed here once the numbers are posted.</p>
              )}
              <p className="text-xs text-warmgray-600 mt-4">
                Percentages are as reported by the Secretary of State: whole-race figures from the official winner
                listing, South Burlington figures from the official town-by-town canvass. Senate, House, and county
                races have no official South Burlington breakdown; those city numbers are the City Clerk&apos;s
                unofficial count and are shown without a percentage. Totals may not add to 100% because of blanks,
                write-ins, and rounding.
              </p>
            </div>
          </div>
        </section>

        {/* Past results + back */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon />
            Back to Voter Guide
          </Link>
          <Link
            href="/archive"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            March 2026 Town Meeting results
            <ArrowRightIcon />
          </Link>
        </div>

        <footer className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 text-center">
          <p className="text-warmgray-600 text-sm leading-relaxed mb-2">
            An independent, nonpartisan community resource. Results compiled from official state and city sources.
          </p>
          <p className="text-xs text-warmgray-600">
            Last updated: {fmtDate(results.lastUpdated)}
          </p>
        </footer>
      </div>
    </main>
  );
}
