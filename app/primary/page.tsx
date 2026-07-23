import Link from "next/link";
import racesData from "@/data/races.json";
import votingInfo from "@/data/voting-info.json";
import OfficeExplainer from "@/components/OfficeExplainer";
import PrimaryCountdown from "@/components/PrimaryCountdown";

// TODO (after the Aug 6, 2026 independent/minor-party filing deadline): run a
// candidate sweep against the certified VT Secretary of State list.
//   - Confirm or remove June Goodband (Governor, Peace & Justice) — her 2026
//     filing was unconfirmed as of July 22, 2026; do not publish speculation.
//   - Confirm Charlie Bass (Lt. Gov, Freedom and Unity) on the certified list;
//     added July 22 on Ballotpedia/Politics1 corroboration + the Dean Roy ticket.
//   - Refresh any "as of <date>" qualifiers on the races that note no opponent.

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 inline-block ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Small link back to the open-primary mechanics box (three ballots, vote one,
// request deadline). Dropped under each race-section heading so the rules are
// never more than one tap away.
const MechanicsLink = () => (
  <a
    href="#primary-mechanics"
    className="inline-flex items-center gap-1 text-xs text-sage-600 hover:text-sage-800 underline underline-offset-2"
  >
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    How Vermont&apos;s open primary works
  </a>
);

const statusColors: Record<string, string> = {
  "running": "bg-sage-100 text-sage-700",
  "likely-running": "bg-sage-50 text-sage-600",
  "announced": "bg-sage-100 text-sage-700",
  "retiring": "bg-warmgray-100 text-warmgray-500",
  "unknown": "bg-cream-100 text-warmgray-500",
};

const statusLabels: Record<string, string> = {
  "running": "Running for reelection",
  "likely-running": "Likely running",
  "announced": "Announced",
  "retiring": "Retiring",
  "unknown": "Plans not announced",
};

const partyColors: Record<string, string> = {
  "Democrat": "bg-blue-50 text-blue-700 border-blue-100",
  "Republican": "bg-red-50 text-red-700 border-red-100",
  "Progressive": "bg-teal-50 text-teal-700 border-teal-100",
  "Independent": "bg-purple-50 text-purple-700 border-purple-100",
  "Peace and Justice": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Unity Party": "bg-amber-50 text-amber-700 border-amber-100",
  "Freedom and Unity": "bg-orange-50 text-orange-700 border-orange-100",
};

function RaceCard({ race }: { race: any }) {
  const isOpenSeat = race.openSeat;
  const allIncumbents = race.incumbents || [];
  const knownCandidates = race.knownCandidates || [];

  return (
    <div className={`bg-white rounded-2xl shadow-soft overflow-hidden border-2 ${isOpenSeat ? 'border-terracotta-200' : 'border-transparent'}`}>
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {race.district && (
                <span className="text-xs font-semibold text-warmgray-400 uppercase tracking-wide">
                  {race.district}
                </span>
              )}
              {race.seats > 1 && (
                <span className="text-xs bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full font-medium">
                  {race.seats} seats
                </span>
              )}
              {isOpenSeat && (
                <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-semibold">
                  Open Seat
                </span>
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-warmgray-800">
              {race.shortName || race.office}
            </h3>
            {race.office !== race.shortName && race.district && (
              <p className="text-warmgray-500 text-sm">{race.office}</p>
            )}
          </div>
          <div className="flex-shrink-0 text-xs text-warmgray-400 text-right">
            {race.termYears}-yr term
          </div>
        </div>

        {/* Why it matters */}
        {race.whyItMatters && (
          <p className="text-warmgray-600 text-sm leading-relaxed mb-4 border-l-2 border-sage-200 pl-3">
            {race.whyItMatters}
          </p>
        )}

        {/* How many to vote for (multi-seat races) */}
        {race.voteForNote && (
          <div className="mb-4 flex items-start gap-2 bg-sage-50 border border-sage-100 rounded-xl px-3 py-2">
            <svg className="w-4 h-4 text-sage-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sage-800 text-xs leading-relaxed font-medium">{race.voteForNote}</p>
          </div>
        )}

        {/* Incumbents */}
        {allIncumbents.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-warmgray-400 uppercase tracking-wide mb-2">
              {isOpenSeat ? 'Outgoing' : 'Current'} {allIncumbents.length > 1 ? 'Officeholders' : 'Officeholder'}
            </p>
            <div className="space-y-2">
              {allIncumbents.map((incumbent: any, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-cream-50">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-medium text-warmgray-800 text-sm">{incumbent.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${partyColors[incumbent.party] || 'bg-warmgray-50 text-warmgray-500 border-warmgray-100'}`}>
                        {incumbent.party}
                      </span>
                    </div>
                    {incumbent.bio && (
                      <p className="text-warmgray-500 text-xs leading-relaxed mt-1 line-clamp-2">{incumbent.bio}</p>
                    )}
                    {incumbent.notablePositions && incumbent.notablePositions.length > 0 && (
                      <ul className="mt-1.5 space-y-0.5">
                        {incumbent.notablePositions.slice(0, 2).map((pos: string, j: number) => (
                          <li key={j} className="text-xs text-warmgray-500 flex items-start gap-1.5">
                            <span className="mt-1 w-1 h-1 rounded-full bg-warmgray-300 flex-shrink-0" />
                            {pos}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[incumbent.status] || statusColors['unknown']}`}>
                      {statusLabels[incumbent.status] || 'Plans TBD'}
                    </span>
                    {incumbent.website && (
                      <a
                        href={incumbent.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-1.5 text-center text-xs text-sage-600 hover:text-sage-800 transition-colors"
                      >
                        Website<ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Known Challengers / Candidates */}
        {knownCandidates.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-warmgray-400 uppercase tracking-wide mb-2">
              Announced Candidates
            </p>
            <div className="space-y-2">
              {knownCandidates.map((candidate: any, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-sage-50 border border-sage-100">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="font-medium text-warmgray-800 text-sm">{candidate.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${partyColors[candidate.party] || 'bg-warmgray-50 text-warmgray-500 border-warmgray-100'}`}>
                        {candidate.party}
                      </span>
                      {candidate.announcedDate && (
                        <span className="text-xs text-warmgray-400">Announced {candidate.announcedDate}</span>
                      )}
                    </div>
                    {candidate.bio && (
                      <p className="text-warmgray-500 text-xs leading-relaxed mt-1">{candidate.bio}</p>
                    )}
                    {candidate.notablePositions && candidate.notablePositions.length > 0 && (
                      <ul className="mt-1.5 space-y-0.5">
                        {candidate.notablePositions.slice(0, 2).map((pos: string, j: number) => (
                          <li key={j} className="text-xs text-warmgray-500 flex items-start gap-1.5">
                            <span className="mt-1 w-1 h-1 rounded-full bg-sage-300 flex-shrink-0" />
                            {pos}
                          </li>
                        ))}
                      </ul>
                    )}
                    {candidate.website && (
                      <a
                        href={candidate.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-sage-600 hover:text-sage-800 transition-colors mt-2"
                      >
                        Website<ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {race.notes && (
          <p className="text-xs text-warmgray-400 italic border-t border-warmgray-100 pt-3 mt-1">{race.notes}</p>
        )}

        {/* District note */}
        {race.districtNote && (
          <div className="mt-2 flex items-start gap-1.5 text-xs text-warmgray-400">
            <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {race.districtNote}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PrimaryPage() {
  const { statewide, federal, stateSenate, stateHouse, county } = racesData;
  const statesAttorney = county.find((r) => r.id === "states-attorney");
  const otherCounty = county.filter((r) => r.id !== "states-attorney");

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-6 left-10 w-40 h-40 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute bottom-0 right-24 w-56 h-56 rounded-full bg-sage-300/50 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-5 transition-colors text-sm"
          >
            <ArrowLeftIcon />
            Back to Voter Guide
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-2xl mb-4">
                <span className="text-white/90">
                  <CalendarIcon />
                </span>
                <span className="text-left leading-none">
                  <span className="block text-sage-100 text-[0.7rem] font-semibold uppercase tracking-widest mb-1">
                    Election Day
                  </span>
                  <span className="block font-display text-2xl sm:text-3xl font-bold text-white">
                    August 11, 2026
                  </span>
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Vermont Primary Election</h1>
              <p className="text-sage-100 text-base sm:text-lg">Each party nominates its candidates for the November general election</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <PrimaryCountdown />
              <a
                href="https://mvp.vermont.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-cream-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-600" />
                </span>
                Early voting is open
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3"/>
          </svg>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Turnout hook */}
        <div className="bg-terracotta-50 border border-terracotta-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <svg className="w-5 h-5 text-terracotta-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <p className="text-sm text-warmgray-700 leading-relaxed">
            <strong className="text-warmgray-800">Your vote counts extra this year.</strong> Vermont is on pace for its
            lowest-turnout primary in more than a decade, based on early-ballot requests (
            <a href="https://www.vermontpublic.org/local-news/2026-07-22/democratic-candidates-governor-voters-primary" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">Vermont Public</a>, July 2026).
            In a low-turnout race, each ballot carries more weight.
          </p>
        </div>

        {/* What is a Primary */}
        <div id="primary-mechanics" className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8 scroll-mt-6">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3">What is the Primary?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-warmgray-600 leading-relaxed">
            <p>
              The primary is how each political party selects its nominees for the general election. Voters choose
              within their preferred party — the winners face off in November.
            </p>
            <p>
              Vermont has an <strong className="text-warmgray-800">open primary</strong>: you may request any party&apos;s
              ballot on Election Day, regardless of your registration. Same-day party changes are allowed at the polls.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-warmgray-100 grid sm:grid-cols-3 gap-4 text-sm text-warmgray-600 leading-relaxed">
            <p>
              <strong className="text-warmgray-800">You get all three ballots.</strong> Democratic, Republican, and
              Progressive. Fill out <strong className="text-warmgray-800">one</strong>, and return the other two
              blank in the unvoted-ballots envelope — skip that and your vote won&apos;t count.
            </p>
            <p>
              <strong className="text-warmgray-800">Vote one party only.</strong> You can&apos;t split across parties
              in the same primary. Your choice doesn&apos;t change your registration, and you can pick a different
              party in November.
            </p>
            <p>
              <strong className="text-warmgray-800">Nobody is mailed a primary ballot automatically.</strong> Request
              one by <strong className="text-warmgray-800">Monday, August 10</strong> at{" "}
              <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">mvp.vermont.gov</a>{" "}
              or the City Clerk&apos;s office, or vote in person on August 11.
            </p>
          </div>
        </div>

        {/* City Ballot Item — Bartlett Bay wastewater bond. NOT a primary race:
            every SB voter gets this on the Aug 11 ballot regardless of party. */}
        <section className="bg-white rounded-2xl shadow-soft border-2 border-terracotta-200 overflow-hidden mb-8">
          <div className="bg-terracotta-500 text-white px-5 sm:px-6 py-2.5 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wide">City ballot item · Every voter gets this one</span>
          </div>
          <div className="p-5 sm:p-7">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-warmgray-800 mb-2">
              $16.4 million for the Bartlett Bay wastewater plant
            </h2>
            <p className="text-warmgray-600 text-sm leading-relaxed mb-5">
              This one isn&apos;t a party race. It&apos;s a <strong className="text-warmgray-800">city question on the same
              August 11 ballot</strong>, and every South Burlington voter gets it — no matter which party&apos;s ballot you
              pick. It&apos;s decided that day, not in November.
            </p>

            {/* What you're voting on */}
            <div className="bg-cream-50 rounded-xl p-4 mb-5">
              <p className="text-warmgray-700 text-sm leading-relaxed">
                Voters are asked to approve an <strong className="text-warmgray-800">additional $16.4 million</strong> to
                rebuild the Bartlett Bay Wastewater Treatment Facility — the city&apos;s sewage-treatment plant off Route 7
                — on top of the <strong className="text-warmgray-800">$33.8 million</strong> bond voters approved on Town
                Meeting Day in 2023. The plant has run continuously for more than 55 years, and 25 years since its last
                major refurbishment. The city says critical parts are worn out and no longer made.
              </p>
            </div>

            {/* City's case + the criticism, side by side and equal */}
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="border border-sage-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide mb-2">Why the cost went up — the city&apos;s case</p>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  The city points to inflation and rising construction costs, tariffs on materials, and federal
                  &ldquo;Buy America&rdquo; rules (the BABA Act) that raise the price of equipment, plus fuel costs. Then
                  crews hit surprises at the site: poor soils and a newly discovered protected wetland that limited where
                  infrastructure could go, along with a design change for wet-weather capacity — a third clarifier, the
                  tank that settles solids out of the water.
                </p>
              </div>
              <div className="border border-warmgray-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-2">The criticism</p>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  <a href="https://www.vtcng.com/otherpapersbvt/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">The Other Paper</a>{" "}
                  reported the request is a <strong className="text-warmgray-800">49% increase</strong> in total project
                  funding, following a <strong className="text-warmgray-800">66% cost overrun</strong> on the Bartlett Bay
                  portion specifically. Some residents and at least one city councilor questioned how late the full scale
                  of the overrun reached voters. The original $33.8 million also covered Queen City Park pump stations
                  (not moving forward) and the Airport Parkway plant (already under construction).
                </p>
              </div>
            </div>

            {/* How it's paid for */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-2">How it gets paid for</p>
              <ul className="space-y-2 text-warmgray-600 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                  <span>A <strong className="text-warmgray-800">2% state clean-water loan</strong> (the Clean Water State Revolving Fund) is lined up for the project as designed. The city says if the bond fails or stalls, that low-interest money gets reallocated to other projects around Vermont — and the contractor holding the current bid may not hold it.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                  <span>A <strong className="text-warmgray-800">$700,000 EPA grant</strong> (2025) covers some energy-efficiency work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                  <span>The rest comes from <strong className="text-warmgray-800">wastewater ratepayers</strong> — your sewer fees, which the city expects to rise about 2–3% a year. The city says South Burlington&apos;s rates are among the lowest in Vermont and would land mid-pack even after the increases.</span>
                </li>
              </ul>
            </div>

            {/* Learn more: hearing + videos */}
            <div className="bg-sage-50 border border-sage-100 rounded-xl p-4 mb-5">
              <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide mb-2">Dig in before you vote</p>
              <ul className="space-y-1.5 text-warmgray-700 text-sm leading-relaxed mb-3">
                <li>
                  <strong className="text-warmgray-800">Public information hearing:</strong> Monday, August 10, 6:00 PM at
                  City Hall (180 Market Street), with a Zoom option (link on the city&apos;s project page).
                </li>
                <li>
                  <strong className="text-warmgray-800">Watch:</strong> Town Meeting TV made two videos — a tour of the
                  facility and a forum with Councilors Andrew Chalnick and Beth Zigmund and the public works director.
                  Both are on the city&apos;s project page.
                </li>
              </ul>
              <a
                href="https://www.southburlingtonvt.gov/705/Bartlett-Bay-WWTF-Upgrade-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                City project page &amp; videos
                <ExternalLinkIcon />
              </a>
            </div>

            {/* Ballot logistics */}
            <div className="flex items-start gap-2 text-xs text-warmgray-500 leading-relaxed">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-warmgray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>
                <strong className="text-warmgray-600">Heads up on your ballot:</strong> because this is a city
                special-election item, these ballots may not be ready until 20–30 days before August 11. If you already
                requested or returned a primary ballot, the city article may reach you separately. Not sure? Check with
                the City Clerk at 802-846-4105.
              </p>
            </div>
          </div>
        </section>

        {/* Candidate Forums (CCTV Burlington) */}
        <div className="bg-white border-2 border-sage-200 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-warmgray-800 mb-1">Watch the candidate forums</h3>
              <p className="text-warmgray-700 text-sm leading-relaxed mb-2">
                See the candidates for the August 11 primary in their own words. New forums are added to the playlist as they&apos;re released.
              </p>
              <p className="text-warmgray-600 text-sm leading-relaxed mb-2">
                Local hook: the three Democratic candidates for Lieutenant Governor held a housing forum in South
                Burlington on July 15 (<a href="https://vtdigger.org/2026/07/20/in-vermonts-democratic-primary-for-lieutenant-governor-leading-candidates-past-work-takes-center-stage/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">VTDigger, July 20</a>).
              </p>
              <p className="text-warmgray-500 text-xs leading-relaxed mb-3">
                Video is courtesy of <a href="https://www.cctv.org" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 underline">Town Meeting TV</a>. Town Meeting TV is Chittenden County&apos;s regional government access TV channel.
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLljLFn4BZd2NCRWbtgzlAg2eWL7886b3J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Watch on YouTube
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Filing Timeline */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
            <CalendarIcon />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sage-800">Filing deadline passed — see full candidate list</p>
            <p className="text-sage-700 text-sm mt-0.5">
              Candidate filing closed <strong>May 28, 2026 at 5:00 PM</strong>.
              The races and candidates below reflect filings as of that deadline. For the official certified list, see the VT SoS candidates page.
            </p>
          </div>
          <a
            href="https://sos.vermont.gov/elections/election-info-resources/candidates/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 bg-white border border-sage-200 hover:border-sage-300 px-4 py-2 rounded-lg transition-colors"
          >
            VT SoS Candidates Page
            <ArrowRightIcon />
          </a>
        </div>

        {/* Statewide Races */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont Statewide Offices</h2>
          </div>
          <div className="mb-4"><MechanicsLink /></div>
          <div className="grid lg:grid-cols-2 gap-5">
            {statewide.map((race) => (
              <div key={race.id} className="flex flex-col gap-3">
                <OfficeExplainer office={race.office} />
                <RaceCard race={race} />
              </div>
            ))}
          </div>
        </section>

        {/* Federal Races */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">Federal Office</h2>
          </div>
          <div className="mb-4"><MechanicsLink /></div>
          <div className="grid lg:grid-cols-2 gap-5">
            {federal.map((race) => (
              <div key={race.id} className="flex flex-col gap-3">
                <OfficeExplainer office={race.office} />
                <RaceCard race={race} />
              </div>
            ))}
          </div>
        </section>

        {/* Vermont State Senate */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont State Senate</h2>
              <p className="text-warmgray-500 text-sm">Your senators from the Chittenden Southeast district</p>
            </div>
          </div>
          <div className="mb-4"><MechanicsLink /></div>
          <div className="space-y-5">
            {stateSenate.map((race) => (
              <div key={race.id} className="flex flex-col gap-3">
                <OfficeExplainer office={race.office} />
                <RaceCard race={race} />
              </div>
            ))}
          </div>
        </section>

        {/* Vermont State House */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont House of Representatives</h2>
              <p className="text-warmgray-500 text-sm">South Burlington spans multiple House districts — see which one you&apos;re in</p>
            </div>
          </div>
          <div className="mb-4"><MechanicsLink /></div>

          <div className="bg-terracotta-50 border border-terracotta-200 rounded-xl p-4 mb-5 flex items-start gap-3">
            <svg className="w-5 h-5 text-terracotta-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-terracotta-800">
              <strong>Find your district:</strong> South Burlington is divided into five Vermont House districts.
              Use{" "}
              <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-terracotta-900">
                My Voter Page (mvp.vermont.gov)
              </a>
              {" "}to look up your exact district based on your address.
            </div>
          </div>

          {/* One explainer for the office type — not once per district */}
          <div className="mb-5">
            <OfficeExplainer office="Vermont House of Representatives" />
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {stateHouse.map((race) => (
              <RaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Chittenden County Offices */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Chittenden County Offices</h2>
              <p className="text-warmgray-500 text-sm">Same for every South Burlington voter — no district lookup needed</p>
            </div>
          </div>
          <div className="mb-4"><MechanicsLink /></div>

          <div className="bg-cream-50 border border-warmgray-200 rounded-xl p-4 mb-5 flex items-start gap-3">
            <svg className="w-5 h-5 text-warmgray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-warmgray-600 leading-relaxed">
              These county offices are elected across all of Chittenden County, so every South Burlington voter sees the
              same candidates. Each is a Democratic primary this August — no Republican or Progressive candidates filed
              for these seats.
            </p>
          </div>

          {/* State's Attorney — featured (the one contested countywide race likely decided in the primary) */}
          {statesAttorney && (
            <div className="flex flex-col gap-3 mb-5">
              <OfficeExplainer office={statesAttorney.office} />
              <RaceCard race={statesAttorney} />
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-5">
            {otherCounty.map((race) => (
              <div key={race.id} className="flex flex-col gap-3">
                <OfficeExplainer office={race.office} />
                <RaceCard race={race} />
              </div>
            ))}
          </div>
        </section>

        {/* Voter Info */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">Primary Voting Info</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-warmgray-700 mb-1">Polling Hours</p>
              <p className="text-warmgray-600">7:00 AM – 7:00 PM</p>
              <p className="text-warmgray-500 mt-3 font-semibold">South Burlington Polling Locations</p>
              <ul className="mt-1 space-y-1">
                {votingInfo.southBurlingtonPollingLocations.map((loc, i) => (
                  <li key={i} className="text-warmgray-500 flex items-start gap-1.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Voter Registration</p>
                <p className="text-warmgray-600">Same-day registration available at the polls.{" "}
                  <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">
                    Register online at mvp.vermont.gov
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Absentee Ballot</p>
                <p className="text-warmgray-600">
                  Request at{" "}
                  <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">
                    mvp.vermont.gov
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Open Primary</p>
                <p className="text-warmgray-600">Request any party&apos;s ballot — you don&apos;t need to be registered with that party.</p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Early voting &amp; drop boxes</p>
                <p className="text-warmgray-600">
                  Early in-person voting at the Clerk&apos;s Office ends at <strong className="text-warmgray-700">noon the day before the election</strong> (noon Monday, August 10). Return a ballot by mail, in person, or in the 24/7 drop boxes near City Hall&apos;s main and back entrances (180 Market Street).
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">City Clerk&apos;s Office</p>
                <p className="text-warmgray-600">
                  180 Market Street &middot; Monday–Friday, 8:00 AM–4:30 PM &middot;{" "}
                  <a href="tel:+18028464105" className="text-sage-600 hover:text-sage-800 underline">802-846-4105</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scope note: Justices of the Peace are a November thing */}
        <div className="bg-warmgray-50 border border-warmgray-200 rounded-xl p-4 mb-8 flex items-start gap-3">
          <svg className="w-5 h-5 text-warmgray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-warmgray-600 leading-relaxed">
            <strong className="text-warmgray-700">Looking for Justices of the Peace?</strong> They&apos;re not on the August primary ballot — JPs are elected in November. You&apos;ll find them on the{" "}
            <Link href="/general" className="text-sage-700 hover:text-sage-900 underline">General Election guide</Link>.
          </p>
        </div>

        {/* Nav to General */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon />
            Back to Voter Guide
          </Link>
          <Link
            href="/general"
            className="flex-1 flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            General Election Guide (Nov 3)
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
