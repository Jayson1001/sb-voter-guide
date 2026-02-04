import Link from "next/link";
import { notFound } from "next/navigation";
import candidatesData from "@/data/candidates.json";

// Icon components
const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const HistoryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export async function generateStaticParams() {
  const allCandidates = candidatesData.races.flatMap(race =>
    race.candidates.map(c => ({ id: c.id }))
  );
  return allCandidates;
}

interface CivicRecordItem {
  date: string;
  action: string;
  context: string;
  source: string;
}

interface Candidate {
  id: string;
  name: string;
  photoUrl: string;
  website: string;
  background: string;
  experience: string[];
  positions: Record<string, { title: string; stance: string }>;
  civicRecord?: CivicRecordItem[];
  civicRecordNote?: string;
  endorsements: string[];
  sources: { title: string; url: string }[];
}

export default function CandidatePage({ params }: { params: { id: string } }) {
  let candidate: Candidate | undefined;
  let race: typeof candidatesData.races[0] | undefined;

  for (const r of candidatesData.races) {
    const found = r.candidates.find(c => c.id === params.id);
    if (found) {
      candidate = found as Candidate;
      race = r;
      break;
    }
  }

  if (!candidate || !race) {
    notFound();
  }

  // Determine accent color based on candidate
  const candidateIndex = race?.candidates.findIndex(c => c.id === params.id) || 0;
  const accentColor = candidateIndex === 0 ? 'sage' : 'terracotta';

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className={`absolute inset-0 ${
          accentColor === 'sage'
            ? 'bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700'
            : 'bg-gradient-to-br from-terracotta-400 via-terracotta-500 to-terracotta-600'
        }`} />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              <ArrowLeftIcon />
            </span>
            <span className="font-medium">Back to Comparison</span>
          </Link>

          {/* Candidate Info */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white">
              <UserIcon />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                {candidate.name}
              </h1>
              <p className="text-white/80">
                Candidate for {race?.title}
              </p>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Background Section */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              accentColor === 'sage' ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
            }`}>
              <BriefcaseIcon />
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">Background</h2>
          </div>
          <p className="text-warmgray-600 leading-relaxed mb-6">{candidate.background}</p>

          {candidate.experience && candidate.experience.length > 0 && (
            <div className={`border-t pt-6 ${
              accentColor === 'sage' ? 'border-sage-100' : 'border-terracotta-100'
            }`}>
              <h3 className="font-display font-semibold text-warmgray-800 mb-4">
                Experience & Involvement
              </h3>
              <ul className="space-y-3">
                {candidate.experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 ${
                      accentColor === 'sage' ? 'bg-sage-400' : 'bg-terracotta-400'
                    }`} />
                    <span className="text-warmgray-600">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Positions Section */}
        {Object.keys(candidate.positions).length > 0 && (
          <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                accentColor === 'sage' ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
              }`}>
                <ClipboardIcon />
              </div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">
                Positions on Key Issues
              </h2>
            </div>

            <div className="space-y-4">
              {Object.entries(candidate.positions).map(([key, position]) => (
                <div
                  key={key}
                  className={`rounded-xl p-5 ${
                    accentColor === 'sage'
                      ? 'bg-gradient-to-r from-sage-50 to-cream-50 border border-sage-100'
                      : 'bg-gradient-to-r from-terracotta-50 to-cream-50 border border-terracotta-100'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={
                      accentColor === 'sage' ? 'text-sage-600' : 'text-terracotta-600'
                    }>
                      {issueIcons[key] || issueIcons.governance}
                    </span>
                    <h3 className="font-display font-semibold text-warmgray-800">
                      {(position as any).title}
                    </h3>
                  </div>
                  <p className="text-warmgray-600 leading-relaxed pl-8">
                    {(position as any).stance}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Civic Record Section */}
        {((candidate.civicRecord && candidate.civicRecord.length > 0) || candidate.civicRecordNote) && (
          <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in-delay-2">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                accentColor === 'sage' ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
              }`}>
                <HistoryIcon />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-warmgray-800">
                  Civic Record
                </h2>
                <p className="text-warmgray-500 text-sm">Actions in local government</p>
              </div>
            </div>

            {candidate.civicRecordNote && !candidate.civicRecord?.length && (
              <div className={`rounded-xl p-4 ${
                accentColor === 'sage' ? 'bg-sage-50 border border-sage-100' : 'bg-terracotta-50 border border-terracotta-100'
              }`}>
                <p className="text-warmgray-600 text-sm italic">{candidate.civicRecordNote}</p>
              </div>
            )}

            {candidate.civicRecord && candidate.civicRecord.length > 0 && (
              <div className="space-y-4">
                {candidate.civicRecord.map((record, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-4 border-l-4 ${
                      accentColor === 'sage'
                        ? 'bg-sage-50/50 border-sage-400'
                        : 'bg-terracotta-50/50 border-terracotta-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-warmgray-800">{record.action}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ${
                        accentColor === 'sage' ? 'bg-sage-100 text-sage-700' : 'bg-terracotta-100 text-terracotta-700'
                      }`}>
                        {record.date}
                      </span>
                    </div>
                    <p className="text-warmgray-600 text-sm mb-2">{record.context}</p>
                    <a
                      href={record.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-xs ${
                        accentColor === 'sage' ? 'text-sage-600 hover:text-sage-800' : 'text-terracotta-600 hover:text-terracotta-800'
                      }`}
                    >
                      View source
                      <LinkIcon />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Website Section */}
        {candidate.website && (
          <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in-delay-2">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                accentColor === 'sage' ? 'bg-sage-100 text-sage-600' : 'bg-terracotta-100 text-terracotta-600'
              }`}>
                <GlobeIcon />
              </div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">
                Campaign Website
              </h2>
            </div>
            <a
              href={candidate.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-medium transition-colors ${
                accentColor === 'sage'
                  ? 'text-sage-600 hover:text-sage-700'
                  : 'text-terracotta-600 hover:text-terracotta-700'
              }`}
            >
              {candidate.website}
              <LinkIcon />
            </a>
          </section>
        )}

        {/* Sources Section */}
        {candidate.sources && candidate.sources.length > 0 && (
          <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8 animate-fade-in-delay-3">
            <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">
              Sources & References
            </h2>
            <ul className="space-y-2">
              {candidate.sources.map((source, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    accentColor === 'sage' ? 'bg-sage-300' : 'bg-terracotta-300'
                  }`} />
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warmgray-600 hover:text-warmgray-800 text-sm link-underline"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Back to Comparison CTA */}
        <div className="text-center">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-white transition-all hover:scale-105 hover:shadow-lg ${
              accentColor === 'sage'
                ? 'bg-sage-500 hover:bg-sage-600'
                : 'bg-terracotta-500 hover:bg-terracotta-600'
            }`}
          >
            <ArrowLeftIcon />
            Compare All Candidates
          </Link>
        </div>
      </div>
    </main>
  );
}
