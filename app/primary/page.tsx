import Link from "next/link";
import racesData from "@/data/races.json";
import votingInfo from "@/data/voting-info.json";

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
  "Independent": "bg-purple-50 text-purple-700 border-purple-100",
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
  const { statewide, federal, stateSenate, stateHouse } = racesData;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-5 transition-colors text-sm"
          >
            <ArrowLeftIcon />
            Back to Voter Guide
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                August 11, 2026
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Vermont Primary Election</h1>
              <p className="text-sage-100 text-base sm:text-lg">Each party nominates its candidates for the November general election</p>
            </div>
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 text-white text-center">
              <p className="text-sage-100 text-xs font-medium uppercase tracking-wide">Filing closes</p>
              <p className="font-display text-2xl font-bold">May 28</p>
              <p className="text-sage-100 text-sm">5:00 PM</p>
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

        {/* What is a Primary */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8">
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
        </div>

        {/* Filing Timeline */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
            <CalendarIcon />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sage-800">Candidates not yet known for most races</p>
            <p className="text-sage-700 text-sm mt-0.5">
              Candidate filing opens <strong>April 27</strong> and closes <strong>May 28, 2026</strong>.
              Incumbents and their known plans are listed below. Check back after May 28 for the full candidate list.
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
          <div className="grid lg:grid-cols-2 gap-5">
            {statewide.map((race) => (
              <RaceCard key={race.id} race={race} />
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
          <div className="grid lg:grid-cols-2 gap-5">
            {federal.map((race) => (
              <RaceCard key={race.id} race={race} />
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
          <div className="space-y-5">
            {stateSenate.map((race) => (
              <RaceCard key={race.id} race={race} />
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

          <div className="grid lg:grid-cols-2 gap-5">
            {stateHouse.map((race) => (
              <RaceCard key={race.id} race={race} />
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
            </div>
          </div>
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
