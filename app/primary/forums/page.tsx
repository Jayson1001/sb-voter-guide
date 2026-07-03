import Link from "next/link";
import forumsData from "@/data/forums.json";

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

function formatAirDate(iso: string | null): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function ForumCard({ forum, featured = false }: { forum: any; featured?: boolean }) {
  const airDate = formatAirDate(forum.airDate);
  return (
    <div className={`bg-white rounded-2xl shadow-soft overflow-hidden ${featured ? "border-2 border-sage-300" : ""}`}>
      <div className="aspect-video w-full bg-warmgray-100">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${forum.videoId}`}
          title={forum.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="p-5 sm:p-6">
        {featured && (
          <span className="inline-block text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide mb-2">
            Featured
          </span>
        )}
        <h3 className="font-display text-lg font-bold text-warmgray-800 mb-2 leading-snug">{forum.title}</h3>
        <div className="flex flex-wrap items-center gap-2 text-xs text-warmgray-500 mb-3">
          {airDate && <span>Aired {airDate}</span>}
          {airDate && forum.host && <span className="text-warmgray-300">&bull;</span>}
          {forum.host && <span>Host: {forum.host}</span>}
        </div>
        {forum.racesCovered && forum.racesCovered.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-warmgray-400 uppercase tracking-wide mb-1.5">Races covered</p>
            <div className="flex flex-wrap gap-1.5">
              {forum.racesCovered.map((race: string, i: number) => (
                <span key={i} className="text-xs bg-sage-50 text-sage-700 px-2 py-0.5 rounded-full border border-sage-100">
                  {race}
                </span>
              ))}
            </div>
          </div>
        )}
        {forum.note && (
          <p className="text-xs text-warmgray-500 italic border-l-2 border-sage-200 pl-3 mb-3">{forum.note}</p>
        )}
        {forum.raceLinkIds && forum.raceLinkIds.length > 0 && (
          <div className="pt-2 border-t border-warmgray-100">
            <Link
              href="/primary"
              className="inline-flex items-center gap-1.5 text-xs text-sage-600 hover:text-sage-800 font-medium"
            >
              See candidates on the primary guide
              <ArrowRightIcon />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ForumsPage() {
  const forums = forumsData.forums;
  const featured = forums.filter((f) => f.featured);
  const rest = forums.filter((f) => !f.featured);

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link
            href="/primary"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-5 transition-colors text-sm"
          >
            <ArrowLeftIcon />
            Back to Primary Guide
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                August 11, 2026 Primary
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Candidate forums</h1>
              <p className="text-sage-100 text-base sm:text-lg">
                See the candidates in their own words before you vote
              </p>
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
        {/* Attribution */}
        <div className="bg-white rounded-2xl shadow-soft p-5 sm:p-6 mb-8">
          <p className="text-sm text-warmgray-700 leading-relaxed mb-2">
            The forums below are candidate primary forums hosted by South Burlington Democrats, Chittenden County Democrats, and other community groups. Videos below are filtered to races that appear on the South Burlington ballot.
          </p>
          <p className="text-xs text-warmgray-500 leading-relaxed">
            {forumsData.attribution.split("Town Meeting TV").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <a
                    href={forumsData.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-700 hover:text-sage-900 underline"
                  >
                    Town Meeting TV
                  </a>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Featured Forums */}
        {featured.length > 0 && (
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">Featured for South Burlington voters</h2>
            <div className="grid gap-6">
              {featured.map((forum) => (
                <ForumCard key={forum.id} forum={forum} featured />
              ))}
            </div>
          </section>
        )}

        {/* Other Forums */}
        {rest.length > 0 && (
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">More forums on your ballot</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((forum) => (
                <ForumCard key={forum.id} forum={forum} />
              ))}
            </div>
          </section>
        )}

        {/* See more on YouTube */}
        <div className="bg-white rounded-2xl shadow-soft p-5 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-warmgray-800">Looking for a race that isn&apos;t here?</p>
              <p className="text-sm text-warmgray-500 mt-0.5">
                Town Meeting TV has additional forums for districts outside South Burlington (Winooski, Burlington-central, and others). See them on their YouTube channel.
              </p>
            </div>
            <a
              href={forumsData.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Full playlist on YouTube
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/primary"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon />
            Back to Primary Guide
          </Link>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            Home
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
