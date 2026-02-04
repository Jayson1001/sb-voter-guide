import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-bold text-warmgray-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-warmgray-600 mb-8">
          This page isn&apos;t on the ballot. Head back to the voter guide to explore candidates, ballot articles, and election info.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-sage-600 text-white px-6 py-3 rounded-xl font-display font-semibold hover:bg-sage-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Voter Guide
          </Link>
          <Link
            href="/sources"
            className="inline-flex items-center justify-center gap-2 bg-white text-warmgray-700 px-6 py-3 rounded-xl font-display font-semibold border border-warmgray-200 hover:bg-warmgray-50 transition-colors"
          >
            View Sources
          </Link>
        </div>
      </div>
    </main>
  );
}
