import Link from 'next/link';

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 inline-block ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const sourceCategories = [
  {
    category: 'Official Vermont Government',
    sources: [
      { title: 'Vermont Secretary of State — Elections', url: 'https://sos.vermont.gov/elections/' },
      { title: 'Vermont Secretary of State — Candidate Filing Info', url: 'https://sos.vermont.gov/elections/election-info-resources/candidates/' },
      { title: 'My Voter Page — Register, check registration, request absentee ballot', url: 'https://mvp.vermont.gov/' },
      { title: 'Vermont Legislature — Bills and resolutions', url: 'https://legislature.vermont.gov/' },
      { title: 'Vermont Secretary of State — 2026 Elections Calendar', url: 'https://outside.vermont.gov/dept/sos/Elections_Division/town_clerks_local_elections/election_procedure/elections_calendar.pdf' },
    ],
  },
  {
    category: 'Official South Burlington',
    sources: [
      { title: 'South Burlington City Clerk — Elections & Voting', url: 'https://www.southburlingtonvt.gov/departments/city_clerk/elections_and_voting.php' },
      { title: 'South Burlington March 3, 2026 Town Meeting Day Results', url: 'https://www.southburlingtonvt.gov/697/March-3-2026-Town-Meeting-Day-Results' },
    ],
  },
  {
    category: 'Ballot Measures — Proposal 3 (Collective Bargaining)',
    sources: [
      { title: 'Vermont Proposal 3 — Ballotpedia', url: 'https://ballotpedia.org/Vermont_Proposal_3,_Right_to_Collective_Bargaining_Amendment_(2026)' },
      { title: 'Vermont Legislature — PR.3 Status', url: 'https://legislature.vermont.gov/bill/status/2026/PR.3' },
    ],
  },
  {
    category: 'Ballot Measures — Proposal 4 (Equal Protection)',
    sources: [
      { title: 'Vermont Equal Protection of Law Amendment (2026) — Ballotpedia', url: 'https://ballotpedia.org/Vermont_Equal_Protection_of_Law_Amendment_(2026)' },
      { title: 'Vermont Legislature — PR.4 Status', url: 'https://legislature.vermont.gov/bill/status/2026/PR.4' },
      { title: 'PR.4 as adopted by the Senate (official PDF)', url: 'https://legislature.vermont.gov/Documents/2024/Docs/BILLS/PR0004/PR0004%20As%20adopted%20by%20the%20Senate%20Official.pdf' },
      { title: 'Looks Like PR.4 Is Coming Soon to a Ballot Near You — Vermont Political Observer', url: 'https://thevpo.org/2026/02/21/looks-like-pr-4-is-coming-soon-to-a-ballot-near-you/' },
    ],
  },
  {
    category: 'Statewide Races & Candidates',
    sources: [
      { title: 'Vermont gubernatorial election, 2026 — Ballotpedia', url: 'https://ballotpedia.org/Vermont_gubernatorial_election,_2026' },
      { title: 'Vermont elections, 2026 — Ballotpedia', url: 'https://ballotpedia.org/Vermont_elections,_2026' },
      { title: 'Vermont State Senate elections, 2026 — Ballotpedia', url: 'https://ballotpedia.org/Vermont_State_Senate_elections,_2026' },
      { title: 'Tim Ashe to run for state auditor — Vermont Business Magazine', url: 'https://vermontbiz.com/news/2026/january/02/tim-ashe-run-state-auditor/' },
      { title: 'Democrats Struggle to Find Candidate to Take on Scott — Seven Days', url: 'https://www.sevendaysvt.com/news/politics/democrats-struggle-to-find-candidate-to-take-on-scott/' },
      { title: 'Lt. Gov. Rodgers and Secretary Copeland Hanzas announce reelection — VTDigger', url: 'https://vtdigger.org/2025/08/14/vermont-lt-gov-john-rodgers-secretary-of-state-sarah-copeland-hanzas-say-theyre-running-for-reelection/' },
      { title: '2026 Vermont House Analysis — Cook Political Report', url: 'https://www.cookpolitical.com/analysis/house/vermont-house/2026-vermont-house-analysis-becca-balint-should-cruise-reelection' },
    ],
  },
  {
    category: 'South Burlington Legislative Districts',
    sources: [
      { title: 'Vermont Legislature — House Districts by Town', url: 'https://legislature.vermont.gov/reports-and-research/research/reapportionment/2022-house-of-representatives-reapportionment/districts-by-town-2/' },
      { title: 'Vermont Senate Chittenden Southeast District — Ballotpedia', url: 'https://ballotpedia.org/Vermont_State_Senate_Chittenden_Southeast_District' },
      { title: 'Senator Thomas Chittenden — Vermont Legislature', url: 'https://legislature.vermont.gov/people/single/2026/34724' },
      { title: 'Martin LaLonde — Official Website', url: 'https://martinlalondevt.com/' },
    ],
  },
  {
    category: 'March 2026 Town Meeting Day Archive',
    sources: [
      { title: 'South Burlington March 3, 2026 Town Meeting Day Results (official)', url: 'https://www.southburlingtonvt.gov/697/March-3-2026-Town-Meeting-Day-Results' },
      { title: 'City Council Candidate Forum (Feb 10, 2026) — YouTube', url: 'https://www.youtube.com/live/q0Fco5ewI8I?si=2ykhCvPlFALwiStz' },
      { title: 'South Burlington candidates file bids for Town Meeting Day seats — The Other Paper', url: 'https://www.vtcng.com/otherpapersbvt/news/municipal_matters/south-burlington-candidates-file-bids-for-town-meeting-day-seats/article_8cebfdd2-6996-4ca9-8f33-7fa60e288c5c.html' },
    ],
  },
];

export default function SourcesPage() {
  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-4 transition-colors">
            <ArrowLeftIcon />
            Back to Voter Guide
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Sources & Citations</h1>
          <p className="text-sage-100 text-lg">
            All information in this voter guide is sourced from official and trusted sources
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* About */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-900 mb-4">About This Voter Guide</h2>
          <div className="text-warmgray-600 text-sm leading-relaxed space-y-3">
            <p>
              This nonpartisan voter guide was created to help South Burlington, Vermont residents make informed
              decisions in the 2026 elections — covering both the Vermont Primary (August 11) and General Election (November 3).
            </p>
            <p>Information presented here comes directly from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Official Vermont state government websites and documents</li>
              <li>Official South Burlington city government websites</li>
              <li>Candidate campaign materials and official announcements</li>
              <li>Local news coverage (VTDigger, Seven Days, The Other Paper, WCAX)</li>
              <li>Nonpartisan election reference sources (Ballotpedia, Cook Political Report)</li>
            </ul>
            <p>
              Every effort has been made to present information accurately and fairly. Candidate information will be
              updated as candidates file and announce (filing opens April 27, 2026). If you notice any errors or
              have updated information, please let us know.
            </p>
          </div>
        </div>

        {/* Sources by Category */}
        {sourceCategories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-soft p-6 mb-6">
            <h2 className="font-display text-lg font-bold text-warmgray-900 mb-4">{category.category}</h2>
            <ul className="space-y-3">
              {category.sources.map((source, sourceIdx) => (
                <li key={sourceIdx} className="flex items-start gap-3">
                  <div className="text-sage-500 flex-shrink-0 mt-0.5">
                    <LinkIcon />
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 hover:text-sage-800 hover:underline transition-colors text-sm"
                  >
                    {source.title}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Disclaimer */}
        <div className="bg-terracotta-50 border border-terracotta-200 rounded-2xl p-6 mt-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-terracotta-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h2 className="font-display font-semibold text-terracotta-800 text-lg">Disclaimer</h2>
              <p className="text-warmgray-600 mt-1 text-sm">
                This voter guide is provided for informational purposes only and is not affiliated with or endorsed by
                the City of South Burlington, the State of Vermont, any political party, or any candidate. For official
                election information, please visit the{' '}
                <a
                  href="https://sos.vermont.gov/elections/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 hover:text-terracotta-800 underline"
                >
                  Vermont Secretary of State&apos;s office
                </a>
                {' '}or the{' '}
                <a
                  href="https://www.southburlingtonvt.gov/departments/city_clerk/elections_and_voting.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 hover:text-terracotta-800 underline"
                >
                  South Burlington City Clerk&apos;s office
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>

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
