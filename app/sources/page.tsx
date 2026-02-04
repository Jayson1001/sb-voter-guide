import Link from 'next/link';
import candidatesData from '@/data/candidates.json';

interface Source {
  title: string;
  url: string;
}

interface Candidate {
  id: string;
  name: string;
  sources: Source[];
}

interface Race {
  id: string;
  title: string;
  candidates: Candidate[];
}

export default function SourcesPage() {
  const lastUpdated = (candidatesData as any).lastUpdated;
  const election = (candidatesData as any).election;
  const races = candidatesData.races as Race[];
  const resources = (candidatesData as any).resources;

  // Collect all unique sources
  const allSources: { category: string; sources: Source[] }[] = [];

  // Official Resources
  allSources.push({
    category: 'Official City Resources',
    sources: [
      { title: 'South Burlington City Clerk - Elections & Voting', url: resources.cityClerk },
      { title: 'City Warnings & Public Hearings (Sample Ballot)', url: resources.sampleBallot },
      { title: 'City Budget Information', url: resources.budgetInfo },
      { title: 'South Burlington City Council', url: 'https://www.southburlingtonvt.gov/government/city_council/index.php' },
    ],
  });

  // Video & Forum Coverage
  allSources.push({
    category: 'Video & Forum Coverage',
    sources: [
      {
        title: 'City Council Candidate Forum (Feb 10, 2026) - Town Meeting TV',
        url: resources.candidateForum || 'https://www.cctv.org/watch-tv/programs/south-burlington-city-council-2-year-term-candidate-forum',
      },
      {
        title: 'Town Meeting Day 2026 Election Coverage - CCTV',
        url: resources.electionCoverage || 'https://www.cctv.org/tmd2026',
      },
      {
        title: 'South Burlington Budget & Ballot Items Presentation - YouTube',
        url: 'https://www.youtube.com/live/POT2W4c17ew',
      },
    ],
  });

  // News Sources
  allSources.push({
    category: 'News Coverage',
    sources: [
      {
        title: 'South Burlington candidates file bids for Town Meeting Day seats - The Other Paper',
        url: 'https://www.vtcng.com/otherpapersbvt/news/municipal_matters/south-burlington-candidates-file-bids-for-town-meeting-day-seats/article_8cebfdd2-6996-4ca9-8f33-7fa60e288c5c.html',
      },
      {
        title: 'Beth Zigmund Candidacy Announcement - The Other Paper',
        url: 'https://www.vtcng.com/otherpapersbvt/opinion/letters_to_the_editor/zigmund-is-running-for-city-council/article_8e2c5745-2a8f-4558-86ab-9b4302082407.html',
      },
      {
        title: 'Amy Allen Candidacy Announcement - The Other Paper',
        url: 'https://www.vtcng.com/otherpapersbvt/opinion/letters_to_the_editor/amy-allen-announces-city-council-candidacy/article_1c009341-108a-4ecb-8c4d-5f79d0a9f355.html',
      },
      {
        title: 'Beth Zigmund VTDigger Commentary on EPA & Climate Policy',
        url: 'https://vtdigger.org/2025/08/20/beth-zigmund-president-donald-trump-wants-to-undo-the-environmental-protection-agencys-ability-to-protect-our-climate-and-air-and-we-must-speak-up/',
      },
      {
        title: 'Bedrock Removal Standards (Beth Zigmund testimony) - The Other Paper',
        url: 'https://www.vtcng.com/otherpapersbvt/news/municipal_matters/new-bedrock-removal-standards-established-with-noise-in-mind/article_2fdd0c8e-c8dc-44a3-9788-abdcf4926658.html',
      },
    ],
  });

  // Candidate-specific sources
  allSources.push({
    category: 'Candidate Profiles & Websites',
    sources: [
      { title: 'Beth Zigmund Campaign Website', url: 'https://bethzforcouncil.com' },
      { title: 'Beth Zigmund - UVM Health Provider Profile', url: 'https://www.uvmhealth.org/providers/beth-zigmund-md' },
      { title: 'Beth Zigmund - Medical Society Consortium on Climate and Health', url: 'https://medsocietiesforclimatehealth.org/team/beth-zigmund-md/' },
    ],
  });

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Voter Guide
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Sources & Citations</h1>
          <p className="text-sage-100 text-lg">
            All information in this voter guide has been verified from official and trusted sources
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Last Updated Notice */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-sage-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h2 className="font-display font-semibold text-sage-800 text-lg">Verification Status</h2>
              <p className="text-warmgray-600 mt-1">
                This voter guide was last verified on{' '}
                <span className="font-semibold text-sage-700">
                  {new Date(lastUpdated + 'T12:00:00').toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                . All candidate information, ballot articles, and election details have been cross-referenced with official sources.
              </p>
            </div>
          </div>
        </div>

        {/* About This Guide */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-900 mb-4">About This Voter Guide</h2>
          <div className="prose prose-warmgray max-w-none text-warmgray-600">
            <p className="mb-4">
              This nonpartisan voter guide was created to help South Burlington residents make informed decisions
              for Town Meeting Day {election.date ? new Date(election.date + 'T12:00:00').getFullYear() : '2026'}.
              The information presented here comes directly from:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Official City of South Burlington documents and websites</li>
              <li>Candidate campaign materials and official announcements</li>
              <li>Local news coverage from The Other Paper (Vermont Community Newspaper Group)</li>
              <li>Professional profiles and public records</li>
            </ul>
            <p>
              Every effort has been made to present information accurately and fairly. If you notice any errors
              or have updated information, please contact us so we can make corrections.
            </p>
          </div>
        </div>

        {/* Sources by Category */}
        {allSources.map((category, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-soft p-6 mb-6">
            <h2 className="font-display text-xl font-bold text-warmgray-900 mb-4">{category.category}</h2>
            <ul className="space-y-3">
              {category.sources.map((source, sourceIdx) => (
                <li key={sourceIdx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-600 hover:text-sage-800 hover:underline transition-colors"
                  >
                    {source.title}
                    <svg className="w-4 h-4 inline-block ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
                the City of South Burlington, any political party, or any candidate. For official election information,
                please visit the{' '}
                <a
                  href={resources.cityClerk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta-600 hover:text-terracotta-800 underline"
                >
                  South Burlington City Clerk&apos;s office
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-warmgray-100 border-t border-warmgray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-warmgray-500 text-sm">
            South Burlington Voter Guide {election.date ? new Date(election.date + 'T12:00:00').getFullYear() : '2026'} &middot;
            A nonpartisan community resource
          </p>
        </div>
      </footer>
    </main>
  );
}
