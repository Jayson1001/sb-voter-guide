import Link from "next/link";
import candidatesData from "@/data/candidates.json";

// Simple icon components
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

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const issueIcons: Record<string, JSX.Element> = {
  fiscalPolicy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  environment: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  development: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  housing: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  governance: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

// Ballot article icons
const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const FireIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationMarkerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  const contestedRace = candidatesData.races.find(race => race.contested);
  const candidates = contestedRace?.candidates || [];
  const keyIssues = candidatesData.keyIssues;
  const ballotArticles = (candidatesData as any).ballotArticles || [];
  const election = (candidatesData as any).election || {};
  const uncontestedRaces = candidatesData.races.filter(race => !race.contested);

  return (
    <main className="min-h-screen bg-pattern">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-terracotta-300/30 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              South Burlington
              <span className="block text-cream-200">Election Results 2026</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-cream-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarIcon />
                <span className="font-medium">March 3, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPinIcon />
                <span className="font-medium">South Burlington, VT</span>
              </div>
            </div>

            {/* Results Banner */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl">
                <div className="text-cream-100 font-display font-medium text-base">
                  Town Meeting Day results are in &mdash; {(candidatesData as any).results.totalBallotsCast.toLocaleString()} ballots cast ({(candidatesData as any).results.turnoutPercent}% turnout)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3"/>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Welcome Message */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in-delay-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗳️</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">
                The Results Are In
              </h2>
              <p className="text-warmgray-600 leading-relaxed">
                Beth Zigmund won the contested City Council seat by 31 votes (1,699 to 1,668).
                All ballot articles passed, including the city budget and fire station bond.
                This is an independent, nonpartisan community resource.
              </p>
            </div>
          </div>
        </div>

        {/* Candidate Forum Banner */}
        <a
          href="https://www.youtube.com/live/q0Fco5ewI8I?si=2ykhCvPlFALwiStz"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-10 group"
        >
          <div className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-2xl p-5 sm:p-6 text-white shadow-soft hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <VideoIcon />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    Archive
                  </span>
                  <span className="text-terracotta-100 text-sm">February 10, 2026</span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl">
                  Watch the Candidate Forum
                </h3>
                <p className="text-terracotta-100 text-sm mt-1">
                  Beth Zigmund and Amy Allen discuss the issues on Town Meeting TV
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                <span className="text-sm font-medium">Watch on YouTube</span>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </a>

        {/* Race Title */}
        <div className="text-center mb-8 animate-fade-in-delay-2">
          <span className="badge badge-sage mb-3">Contested Race &mdash; Results</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800">
            {contestedRace?.title}
          </h2>
          <p className="text-warmgray-500 mt-2">Beth Zigmund elected with 1,699 votes (50.5%) to Amy Allen&apos;s 1,668 (49.5%)</p>
        </div>

        {/* Candidate Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-delay-3">
          {candidates.map((candidate, index) => (
            <div
              key={candidate.id}
            >
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full border-2 border-transparent hover:border-sage-200 transition-colors">
                {/* Candidate Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
                  }`}>
                    <UserIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-warmgray-800">
                      {candidate.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      {(candidate as any).elected ? (
                        <span className="text-xs font-semibold text-sage-700 bg-sage-100 px-2 py-0.5 rounded-full">Elected &mdash; {(candidate as any).votes?.toLocaleString()} votes</span>
                      ) : (
                        <span className="text-xs font-semibold text-warmgray-500 bg-warmgray-100 px-2 py-0.5 rounded-full">{(candidate as any).votes?.toLocaleString()} votes</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Background */}
                <p className="text-warmgray-600 text-sm leading-relaxed mb-4">
                  {candidate.background}
                </p>

                {/* Quick highlights */}
                {candidate.experience && candidate.experience.length > 0 && (
                  <div className="pt-4 border-t border-warmgray-100">
                    <p className="text-xs font-semibold text-warmgray-400 uppercase tracking-wide mb-2">
                      Experience Highlights
                    </p>
                    <ul className="space-y-1">
                      {candidate.experience.slice(0, 2).map((exp, i) => (
                        <li key={i} className="text-sm text-warmgray-600 flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            index === 0 ? 'bg-sage-400' : 'bg-terracotta-400'
                          }`} />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Uncontested Races */}
        {uncontestedRaces.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
                Uncontested Races — Results
              </h2>
              <p className="text-warmgray-500">These candidates ran unopposed and were elected</p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              {/* City Council Context */}
              <div className="p-6 border-b border-warmgray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                    <UserIcon />
                  </div>
                  <h3 className="font-display font-bold text-warmgray-800">City Council</h3>
                </div>
                <p className="text-warmgray-500 text-xs mb-4 ml-10">
                  The 5-member council sets the city budget, approves zoning changes, hires the city manager, and makes policy decisions on development, infrastructure, and services.
                </p>
                <div className="space-y-3">
                  {uncontestedRaces
                    .filter((race: any) => !race.type || race.type !== 'school-board')
                    .map((race: any) => (
                      <div key={race.id} className="block">
                        <div className="flex items-center justify-between bg-cream-50 rounded-xl p-4 hover:bg-sage-50 transition-colors">
                          <div>
                            <p className="font-medium text-warmgray-800">
                              {race.candidates[0]?.name || 'No candidate'}
                            </p>
                            <p className="text-sm text-warmgray-500">{race.title}</p>
                            {race.candidates[0]?.experience?.[0] && (
                              <p className="text-xs text-warmgray-400 mt-1">{race.candidates[0].experience[0]}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {race.candidates[0]?.votes && (
                              <span className="text-xs text-warmgray-400">{race.candidates[0].votes.toLocaleString()} votes</span>
                            )}
                            <span className="flex items-center gap-1 text-sage-600 text-sm font-medium">
                              <CheckCircleIcon />
                              Elected
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* School Board Context */}
              <div className="p-6 bg-cream-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
                    <AcademicCapIcon />
                  </div>
                  <h3 className="font-display font-bold text-warmgray-800">School Board</h3>
                </div>
                <p className="text-warmgray-500 text-xs mb-4 ml-10">
                  The school board hires the superintendent, sets the school budget (which makes up ~70-75% of your property tax), negotiates teacher contracts, and oversees district policy. This year&apos;s $73.9M school budget was approved 4-3 by the board.
                </p>
                <div className="space-y-3">
                  {uncontestedRaces
                    .filter((race: any) => race.type === 'school-board')
                    .map((race: any) => (
                      <div key={race.id}>
                        {race.candidates.length > 0 ? (
                          <div className="block">
                            <div className="flex items-center justify-between bg-white rounded-xl p-4 hover:bg-sage-50 transition-colors">
                              <div>
                                <p className="font-medium text-warmgray-800">
                                  {race.candidates[0]?.name}
                                </p>
                                <p className="text-sm text-warmgray-500">{race.title}</p>
                                {race.candidates[0]?.experience?.[0] && (
                                  <p className="text-xs text-warmgray-400 mt-1">{race.candidates[0].experience[0]}</p>
                                )}
                              </div>
                              <div className="flex items-center gap-3">
                                {race.candidates[0]?.votes && (
                                  <span className="text-xs text-warmgray-400">{race.candidates[0].votes.toLocaleString()} votes</span>
                                )}
                                <span className="flex items-center gap-1 text-sage-600 text-sm font-medium">
                                  <CheckCircleIcon />
                                  Elected
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-white rounded-xl p-4">
                            <div>
                              <p className="text-warmgray-400 italic font-medium">No candidate filed</p>
                              <p className="text-sm text-warmgray-500">{race.title}</p>
                              <p className="text-xs text-warmgray-400 mt-1">Seat remained unfilled — no candidates filed</p>
                            </div>
                            <span className="text-terracotta-600 text-sm font-medium">Open Seat</span>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ballot Articles */}
        {ballotArticles.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
                Ballot Article Results
              </h2>
              <p className="text-warmgray-500">How South Burlington voted on March 3rd</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ballotArticles.slice(1).map((article: any, index: number) => {
                return (
                  <div
                    key={article.id}
                  >
                    <div className="bg-white rounded-2xl shadow-soft p-6 border-2 border-transparent hover:border-sage-200 transition-colors h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          index === 0 ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
                        }`}>
                          {index === 0 ? <DocumentIcon /> : <FireIcon />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-warmgray-800 mb-1">
                            {article.title}
                          </h3>
                          {article.amount && (
                            <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                              index === 0 ? 'bg-sage-100 text-sage-700' : 'bg-terracotta-100 text-terracotta-700'
                            }`}>
                              {article.amount}
                            </span>
                          )}
                          <p className="text-warmgray-600 text-sm leading-relaxed mb-3">
                            {article.description}
                          </p>
                          {article.passed !== undefined && (
                            <div className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                              article.passed ? 'bg-sage-100 text-sage-700' : 'bg-red-100 text-red-700'
                            }`}>
                              <CheckCircleIcon />
                              {article.passed ? 'Approved' : 'Rejected'} &mdash; {article.votesYes?.toLocaleString()} Yes / {article.votesNo?.toLocaleString()} No
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Official Results Link */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-gradient-to-r from-sage-500 to-sage-600 p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Town Meeting Day</p>
                    <p className="font-display font-bold text-xl">March 3, 2026 &mdash; Final Results</p>
                  </div>
                </div>
                <a
                  href="https://www.southburlingtonvt.gov/697/March-3-2026-Town-Meeting-Day-Results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Official Results
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-display font-bold text-warmgray-800 mb-2">
              About This Guide
            </h3>
            <p className="text-warmgray-600 text-sm leading-relaxed mb-3">
              This voter guide was created to help South Burlington residents make informed decisions.
              Information is compiled from candidate websites, public statements, and local news coverage.
            </p>
            <p className="text-xs text-warmgray-400 mb-4">
              An independent, nonpartisan community resource. All positions sourced from publicly available materials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-warmgray-100">
              <Link
                href="/sources"
                className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                View Sources & Citations
              </Link>
              <span className="hidden sm:inline text-warmgray-300">•</span>
              <span className="text-xs text-warmgray-400">
                Last updated: {new Date((candidatesData as any).lastUpdated + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
