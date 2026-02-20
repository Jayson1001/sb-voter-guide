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
              <span className="block text-cream-200">Voter Guide 2026</span>
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

            {/* Election Countdown */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-3 bg-terracotta-500/90 backdrop-blur-sm px-5 py-3 rounded-xl">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-white">
                    {Math.max(0, Math.ceil((new Date('2026-03-03').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))}
                  </div>
                  <div className="text-terracotta-100 text-xs uppercase tracking-wide">days</div>
                </div>
                <div className="text-terracotta-100 text-sm">
                  until<br />Election Day
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
                Your Voice Matters
              </h2>
              <p className="text-warmgray-600 leading-relaxed">
                This guide helps you compare candidates for the contested City Council seat.
                Click on any candidate to learn more about their background and positions.
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
                    Upcoming
                  </span>
                  <span className="text-terracotta-100 text-sm">February 10 @ 5:25 PM</span>
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl">
                  Watch the Candidate Forum
                </h3>
                <p className="text-terracotta-100 text-sm mt-1">
                  Beth Zigmund and Amy Allen discuss the issues on Town Meeting TV
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                <span className="text-sm font-medium">Watch on CCTV</span>
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </a>

        {/* Race Title */}
        <div className="text-center mb-8 animate-fade-in-delay-2">
          <span className="badge badge-sage mb-3">Contested Race</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800">
            {contestedRace?.title}
          </h2>
          <p className="text-warmgray-500 mt-2">Compare the candidates side by side</p>
        </div>

        {/* Candidate Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-delay-3">
          {candidates.map((candidate, index) => (
            <Link
              key={candidate.id}
              href={`/candidate/${candidate.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-soft p-6 h-full card-interactive border-2 border-transparent hover:border-sage-200">
                {/* Candidate Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
                  }`}>
                    <UserIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-warmgray-800 group-hover:text-sage-600 transition-colors">
                      {candidate.name}
                    </h3>
                    <p className="text-sm text-warmgray-500">Candidate</p>
                  </div>
                  <div className="text-warmgray-300 group-hover:text-sage-500 group-hover:translate-x-1 transition-all">
                    <ArrowRightIcon />
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
            </Link>
          ))}
        </div>

        {/* Issue Comparison */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
              Where They Stand
            </h2>
            <p className="text-warmgray-500">Compare positions on key local issues</p>
          </div>

          <div className="space-y-4">
            {keyIssues.map((issue, issueIndex) => (
              <div
                key={issue.id}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
                style={{ animationDelay: `${0.4 + issueIndex * 0.1}s` }}
              >
                {/* Issue Header */}
                <div className="bg-gradient-to-r from-sage-50 to-cream-100 px-6 py-4 border-b border-sage-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-sage-600">
                      {issueIcons[issue.id] || issueIcons.governance}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-warmgray-800">
                        {issue.title}
                      </h3>
                      <p className="text-xs text-warmgray-500">{issue.description}</p>
                    </div>
                  </div>
                </div>

                {/* Candidate Positions */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-warmgray-100">
                  {candidates.map((candidate, candidateIndex) => {
                    const position = (candidate.positions as Record<string, { title: string; stance: string }>)[issue.id];
                    return (
                      <div key={candidate.id} className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${
                            candidateIndex === 0 ? 'bg-sage-400' : 'bg-terracotta-400'
                          }`} />
                          <span className="font-semibold text-sm text-warmgray-700">
                            {candidate.name}
                          </span>
                        </div>
                        <p className="text-warmgray-600 text-sm leading-relaxed">
                          {position?.stance || "Position not yet available"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="bg-gradient-to-r from-sage-50 to-cream-100 px-6 py-4 border-b border-sage-100">
              <h2 className="font-display font-bold text-warmgray-800">At a Glance</h2>
              <p className="text-warmgray-500 text-sm">Quick comparison of the two candidates</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-warmgray-200">
                    <th className="text-left py-3 px-4 font-semibold text-warmgray-500 w-1/3"></th>
                    <th className="text-left py-3 px-4 font-semibold text-sage-700 w-1/3">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sage-400" />
                        {candidates[0]?.name}
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-terracotta-700 w-1/3">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-terracotta-400" />
                        {candidates[1]?.name}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warmgray-100">
                    <td className="py-3 px-4 font-medium text-warmgray-600">Profession</td>
                    <td className="py-3 px-4 text-warmgray-700">Physician (radiologist)</td>
                    <td className="py-3 px-4 text-warmgray-700">International development consultant</td>
                  </tr>
                  <tr className="border-b border-warmgray-100 bg-cream-50/50">
                    <td className="py-3 px-4 font-medium text-warmgray-600">Local Gov Experience</td>
                    <td className="py-3 px-4 text-warmgray-700">Energy Committee member</td>
                    <td className="py-3 px-4 text-warmgray-700">None (new to SB politics)</td>
                  </tr>
                  <tr className="border-b border-warmgray-100">
                    <td className="py-3 px-4 font-medium text-warmgray-600">On Taxes</td>
                    <td className="py-3 px-4 text-warmgray-700">Evidence-based spending; review cost of new mandates</td>
                    <td className="py-3 px-4 text-warmgray-700">Sustainable budgets; protect core services without overburdening taxpayers</td>
                  </tr>
                  <tr className="border-b border-warmgray-100 bg-cream-50/50">
                    <td className="py-3 px-4 font-medium text-warmgray-600">On Climate</td>
                    <td className="py-3 px-4 text-warmgray-700">Strong advocate; pushed carbon-free construction</td>
                    <td className="py-3 px-4 text-warmgray-700">Build on existing efforts; balance with affordability</td>
                  </tr>
                  <tr className="border-b border-warmgray-100">
                    <td className="py-3 px-4 font-medium text-warmgray-600">On Housing</td>
                    <td className="py-3 px-4 text-warmgray-700">Use data to assess if policies lower costs</td>
                    <td className="py-3 px-4 text-warmgray-700">Address affordability through economic development</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-warmgray-600">Campaign Website</td>
                    <td className="py-3 px-4">
                      <a href="https://bethzforcouncil.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:underline text-xs">bethzforcouncil.com</a>
                    </td>
                    <td className="py-3 px-4 text-warmgray-400 text-xs italic">Not available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Uncontested Races */}
        {uncontestedRaces.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
                Uncontested Races
              </h2>
              <p className="text-warmgray-500">These candidates are running unopposed</p>
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
                      <Link key={race.id} href={`/candidate/${race.candidates[0]?.id}`} className="group block">
                        <div className="flex items-center justify-between bg-cream-50 rounded-xl p-4 hover:bg-sage-50 transition-colors">
                          <div>
                            <p className="font-medium text-warmgray-800 group-hover:text-sage-700 transition-colors">
                              {race.candidates[0]?.name || 'No candidate'}
                            </p>
                            <p className="text-sm text-warmgray-500">{race.title}</p>
                            {race.candidates[0]?.experience?.[0] && (
                              <p className="text-xs text-warmgray-400 mt-1">{race.candidates[0].experience[0]}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-sage-600 text-sm font-medium">
                              <CheckCircleIcon />
                              Uncontested
                            </span>
                            <ArrowRightIcon />
                          </div>
                        </div>
                      </Link>
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
                          <Link href={`/candidate/${race.candidates[0]?.id}`} className="group block">
                            <div className="flex items-center justify-between bg-white rounded-xl p-4 hover:bg-sage-50 transition-colors">
                              <div>
                                <p className="font-medium text-warmgray-800 group-hover:text-sage-700 transition-colors">
                                  {race.candidates[0]?.name}
                                </p>
                                <p className="text-sm text-warmgray-500">{race.title}</p>
                                {race.candidates[0]?.experience?.[0] && (
                                  <p className="text-xs text-warmgray-400 mt-1">{race.candidates[0].experience[0]}</p>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1 text-sage-600 text-sm font-medium">
                                  <CheckCircleIcon />
                                  Uncontested
                                </span>
                                <ArrowRightIcon />
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex items-center justify-between bg-white rounded-xl p-4">
                            <div>
                              <p className="text-warmgray-400 italic font-medium">No candidate filed</p>
                              <p className="text-sm text-warmgray-500">{race.title}</p>
                              <p className="text-xs text-warmgray-400 mt-1">Write-in candidates accepted at the polls</p>
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
                Also on the Ballot
              </h2>
              <p className="text-warmgray-500">Other items you'll vote on March 3rd</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ballotArticles.slice(1).map((article: any, index: number) => {
                const href = index === 0 ? '/budget' : '/fire-station-bond';
                return (
                  <Link
                    key={article.id}
                    href={href}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-soft p-6 border-2 border-transparent hover:border-sage-200 transition-colors h-full card-interactive">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          index === 0 ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
                        }`}>
                          {index === 0 ? <DocumentIcon /> : <FireIcon />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="font-display font-bold text-warmgray-800 mb-1 group-hover:text-sage-600 transition-colors">
                              {article.title}
                            </h3>
                            <div className="text-warmgray-300 group-hover:text-sage-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2">
                              <ArrowRightIcon />
                            </div>
                          </div>
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
                          <span className={`inline-flex items-center gap-1 text-sm font-medium ${
                            index === 0 ? 'text-sage-600' : 'text-terracotta-600'
                          }`}>
                            Learn more
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* FAQ / How Voting Works */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
              How Town Meeting Day Works
            </h2>
            <p className="text-warmgray-500">New to South Burlington elections? Here&apos;s what you need to know</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-warmgray-800">What is Town Meeting Day?</h3>
              </div>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                Vermont&apos;s annual local election day held the first Tuesday in March. South Burlington uses
                Australian ballot voting (you vote at the polls or by mail) rather than a floor meeting.
                You&apos;ll vote on candidates <em>and</em> ballot articles (budget, bonds, etc.).
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                  <UserIcon />
                </div>
                <h3 className="font-display font-bold text-warmgray-800">What does City Council do?</h3>
              </div>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                The 5-member council is the city&apos;s legislative body. They set the municipal budget and tax rate,
                approve zoning and development changes, hire the city manager, and make policy decisions affecting
                roads, parks, police, fire, and city services. Members serve 2- or 3-year terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
                  <AcademicCapIcon />
                </div>
                <h3 className="font-display font-bold text-warmgray-800">What does the School Board do?</h3>
              </div>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                The school board hires the superintendent, sets the school budget (which typically makes up
                70-75% of your property tax bill), negotiates teacher contracts, and oversees education policy.
                This year&apos;s $73.9M school budget was approved 4-3 by the board.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
                  <DocumentIcon />
                </div>
                <h3 className="font-display font-bold text-warmgray-800">What&apos;s a bond vote?</h3>
              </div>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                A bond is long-term borrowing for a capital project (like the fire station addition). Voters must
                approve bonds because they commit the city to future payments. The fire station bond (Article 3) is
                funded through fees, not property taxes, so it won&apos;t increase your tax bill.
              </p>
            </div>
          </div>
        </div>

        {/* Voting Information */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 mb-2">
              How to Vote
            </h2>
            <p className="text-warmgray-500">Everything you need to know for election day</p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            {/* Election Date & Hours */}
            <div className="bg-gradient-to-r from-sage-500 to-sage-600 p-6 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Election Day</p>
                    <p className="font-display font-bold text-xl">Tuesday, March 3, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <ClockIcon />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Polls Open</p>
                    <p className="font-display font-bold text-xl">{election.pollingHours || "7:00 AM - 7:00 PM"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Voting & Absentee */}
            <div className="p-6 border-b border-warmgray-100">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-display font-bold text-warmgray-800">Vote Early or by Mail</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-sage-50 rounded-xl p-4">
                  <h4 className="font-semibold text-sage-800 mb-2">Early Voting</h4>
                  <p className="text-sm text-warmgray-600 mb-2">
                    <strong>Feb 11 - Mar 2</strong> (ends at noon)
                  </p>
                  <p className="text-sm text-warmgray-500">
                    City Clerk's Office, 180 Market St<br />
                    Mon-Fri, 8 AM - 4:30 PM
                  </p>
                </div>
                <div className="bg-sage-50 rounded-xl p-4">
                  <h4 className="font-semibold text-sage-800 mb-2">Absentee Ballot</h4>
                  <p className="text-sm text-warmgray-600 mb-2">
                    Request by <strong>March 2</strong>
                  </p>
                  <p className="text-sm text-warmgray-500 mb-2">
                    24/7 drop box at City Hall entrances
                  </p>
                  <a
                    href="https://mvp.vermont.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sage-600 hover:text-sage-800 text-sm font-medium"
                  >
                    Request online
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Voter Registration */}
            <div className="p-6 border-b border-warmgray-100 bg-cream-50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 flex-shrink-0">
                  <CheckCircleIcon />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-warmgray-800 mb-1">Check Your Registration</h4>
                  <p className="text-warmgray-600 text-sm mb-2">
                    Vermont allows same-day voter registration, but checking ahead saves time at the polls.
                  </p>
                  <a
                    href="https://mvp.vermont.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Check My Voter Page
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Polling Locations */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <LocationMarkerIcon />
                <h3 className="font-display font-bold text-warmgray-800">Polling Locations</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {(election.pollingLocations || []).map((location: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-cream-100 rounded-xl p-4"
                  >
                    <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-warmgray-700 text-sm">{location}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ballot Cheat Sheet Link */}
            <div className="p-6 border-b border-warmgray-100">
              <Link href="/cheat-sheet" className="group flex items-center gap-4">
                <div className="w-10 h-10 bg-terracotta-100 rounded-xl flex items-center justify-center text-terracotta-600 flex-shrink-0 group-hover:bg-terracotta-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-warmgray-800 group-hover:text-terracotta-600 transition-colors">Ballot Cheat Sheet</h4>
                  <p className="text-warmgray-500 text-sm">Print-friendly guide with all races and ballot articles to bring to the polls</p>
                </div>
                <div className="text-warmgray-300 group-hover:text-terracotta-500 group-hover:translate-x-1 transition-all">
                  <ArrowRightIcon />
                </div>
              </Link>
            </div>

            {/* Public Hearing */}
            {election.publicHearing && (
              <div className="border-t border-warmgray-100 p-6 bg-terracotta-50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-terracotta-100 rounded-xl flex items-center justify-center text-terracotta-600 flex-shrink-0">
                    <MegaphoneIcon />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-warmgray-800 mb-1">Public Information Meeting</h4>
                    <p className="text-warmgray-600 text-sm mb-2">
                      <strong>Monday, March 2, 2026 at {election.publicHearing.time}</strong>
                    </p>
                    <p className="text-warmgray-500 text-sm">
                      {election.publicHearing.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
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
