import Link from 'next/link';
import { getElectionsRegistry, getElectionData } from '@/lib/elections';
import ElectionCard from '@/components/ElectionCard';

export default function HomePage() {
  const elections = getElectionsRegistry();
  const featured = elections.find(e => e.featured);
  const featuredData = featured ? getElectionData(featured.slug) : null;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-terracotta-300/30 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-cream-200 text-sm font-medium">Vermont Election Guide</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Local Elections,
            <span className="block text-cream-200">Made Clear</span>
          </h1>
          <p className="text-cream-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Nonpartisan guides and results archives for Vermont municipal elections.
            Know your ballot before you vote.
          </p>

          {featured && (
            <Link
              href={`/elections/${featured.slug}`}
              className="inline-flex items-center gap-2 bg-white text-sage-700 px-6 py-3 rounded-xl font-display font-semibold hover:bg-cream-100 transition-colors shadow-lg"
            >
              View Latest Results
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3"/>
          </svg>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured Election Callout */}
        {featured && featuredData && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-sage">Latest Election</span>
            </div>
            <Link href={`/elections/${featured.slug}`} className="block group">
              <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 border-2 border-transparent hover:border-sage-200 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-warmgray-800 group-hover:text-sage-700 transition-colors mb-2">
                      {featured.name}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-sm text-warmgray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(featured.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {featured.location}
                      </span>
                    </div>
                    {featuredData.results && (
                      <p className="text-warmgray-600 text-sm">
                        {featuredData.results.totalBallotsCast.toLocaleString()} ballots cast &mdash; {featuredData.results.turnoutPercent}% voter turnout
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 bg-sage-100 text-sage-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                      Results Available
                    </span>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-warmgray-100 flex flex-wrap gap-3 text-sm">
                  {[
                    { label: 'City Council Results', href: `/elections/${featured.slug}` },
                    { label: 'Budget Details', href: `/elections/${featured.slug}/budget` },
                    { label: 'Fire Station Bond', href: `/elections/${featured.slug}/fire-station-bond` },
                    { label: 'Sources', href: `/elections/${featured.slug}/sources` },
                  ].map(link => (
                    <span key={link.href} className="text-sage-600 font-medium">
                      {link.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Elections */}
        <div>
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-6">All Elections</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {elections.map(election => (
              <ElectionCard key={election.slug} election={election} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-warmgray-200 text-center">
          <p className="text-warmgray-500 text-sm">
            Vermont Election Guide &middot; An independent, nonpartisan community resource
          </p>
        </footer>
      </div>
    </main>
  );
}
