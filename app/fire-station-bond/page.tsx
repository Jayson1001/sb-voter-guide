import Link from 'next/link';
import budgetData from '@/data/budget.json';

export default function FireStationBondPage() {
  const { fireStationBond, sources } = budgetData;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="bg-terracotta-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-terracotta-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Voter Guide
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
              Article 3
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Fire Station 1 Addition
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-terracotta-100 text-sm">Bond Amount</p>
              <p className="font-display font-bold text-2xl">$2.3 Million</p>
            </div>
            <div className="bg-sage-500/80 backdrop-blur-sm rounded-xl px-4 py-2">
              <p className="text-sage-100 text-sm">Tax Impact</p>
              <p className="font-display font-bold text-2xl">$0</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Key Message */}
        <div className="bg-sage-50 border-2 border-sage-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-bold text-sage-800 text-lg mb-1">
                No Property Tax Increase
              </h2>
              <p className="text-warmgray-600">
                This bond would be funded through capital assessment fees and surplus from the rental
                registration program — <strong>not from general taxpayer funds</strong>. If approved,
                your property taxes will not increase as a result of this bond.
              </p>
            </div>
          </div>
        </div>

        {/* What You're Voting On */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            What You&apos;re Voting On
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0 text-terracotta-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-warmgray-800">The Project</h3>
                <p className="text-warmgray-600 mt-1">
                  A {fireStationBond.squareFootage.toLocaleString()} square foot addition to Fire Station 1,
                  located at {fireStationBond.location}. The station was originally built in {fireStationBond.yearBuilt}.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0 text-terracotta-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-warmgray-800">Current Staffing</h3>
                <p className="text-warmgray-600 mt-1">
                  {fireStationBond.currentStaffing}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-terracotta-100 rounded-lg flex items-center justify-center flex-shrink-0 text-terracotta-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-warmgray-800">Why It&apos;s Needed</h3>
                <p className="text-warmgray-600 mt-1">
                  {fireStationBond.reason} The current temporary solution is not sustainable
                  for long-term operations, especially during extreme weather.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It's Funded */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            How It&apos;s Funded
          </h2>

          <div className="bg-cream-100 rounded-xl p-5 mb-4">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {fireStationBond.fundingSources.map((source, index) => (
                <div key={source} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sage-200 rounded-full flex items-center justify-center text-sage-700 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium text-warmgray-700">{source}</span>
                  {index < fireStationBond.fundingSources.length - 1 && (
                    <span className="text-warmgray-300 mx-2">+</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-sage-50 rounded-xl p-4">
              <h3 className="font-semibold text-sage-800 mb-2">Capital Assessment Fees</h3>
              <p className="text-warmgray-600 text-sm">
                Fees collected from new development to fund infrastructure needs created by growth.
                These are one-time fees paid by developers, not recurring taxes on residents.
              </p>
            </div>
            <div className="bg-sage-50 rounded-xl p-4">
              <h3 className="font-semibold text-sage-800 mb-2">Rental Registry Surplus</h3>
              <p className="text-warmgray-600 text-sm">
                Excess revenue from the rental registration program, which inspects rental properties
                for safety compliance. The surplus comes from registration fees paid by landlords.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens If */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            What Happens If...
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-sage-50 border border-sage-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-sage-800">It Passes</h3>
              </div>
              <ul className="space-y-2 text-warmgray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  Construction planning begins after voter approval
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  Permanent workspace for rental inspection staff
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  Improved facilities for firefighters on 24-hour shifts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sage-500 mt-1">•</span>
                  No impact on property taxes
                </li>
              </ul>
            </div>

            <div className="bg-warmgray-50 border border-warmgray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-warmgray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-bold text-warmgray-700">It Fails</h3>
              </div>
              <ul className="space-y-2 text-warmgray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-warmgray-400 mt-1">•</span>
                  Staff continues working from temporary trailer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warmgray-400 mt-1">•</span>
                  City may seek alternative funding or bring back to voters
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warmgray-400 mt-1">•</span>
                  Capital fees and rental surplus remain in those funds
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Station Info */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            About Fire Station 1
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-cream-100 rounded-xl">
              <p className="text-warmgray-500 text-sm mb-1">Location</p>
              <p className="font-semibold text-warmgray-800">575 Dorset Street</p>
            </div>
            <div className="text-center p-4 bg-cream-100 rounded-xl">
              <p className="text-warmgray-500 text-sm mb-1">Year Built</p>
              <p className="font-semibold text-warmgray-800">{fireStationBond.yearBuilt}</p>
            </div>
            <div className="text-center p-4 bg-cream-100 rounded-xl">
              <p className="text-warmgray-500 text-sm mb-1">On-Duty Staff</p>
              <p className="font-semibold text-warmgray-800">5 firefighters 24/7</p>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="bg-warmgray-50 rounded-2xl p-6 mb-8">
          <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-2">
            {sources.filter(s => s.title.includes('Fire') || s.title.includes('Budget')).map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 hover:underline text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Also on Ballot */}
        <div className="bg-white rounded-2xl shadow-soft p-6">
          <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">
            Also on Your Ballot
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/budget"
              className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl hover:bg-sage-100 transition-colors"
            >
              <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-warmgray-800">City Budget</p>
                <p className="text-sm text-warmgray-500">$58.5M - Article 2</p>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 p-4 bg-sage-50 rounded-xl hover:bg-sage-100 transition-colors"
            >
              <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-warmgray-800">City Council Race</p>
                <p className="text-sm text-warmgray-500">2 candidates - contested</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warmgray-100 border-t border-warmgray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-warmgray-500 text-sm">
            South Burlington Voter Guide 2026 &middot; A nonpartisan community resource
          </p>
        </div>
      </footer>
    </main>
  );
}
