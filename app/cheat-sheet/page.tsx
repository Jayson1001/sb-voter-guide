import Link from "next/link";
import candidatesData from "@/data/candidates.json";

export const metadata = {
  title: "Ballot Cheat Sheet - South Burlington Voter Guide 2026",
  description: "Print-friendly ballot guide for the March 3, 2026 South Burlington Town Meeting Day election.",
};

export default function CheatSheetPage() {
  const election = (candidatesData as any).election || {};
  const ballotArticles = (candidatesData as any).ballotArticles || [];
  const contestedRace = candidatesData.races.find((race) => race.contested);
  const candidates = contestedRace?.candidates || [];
  const uncontestedRaces = candidatesData.races.filter(
    (race) => !race.contested
  );

  return (
    <main className="min-h-screen bg-pattern">
      {/* Screen-only header */}
      <div className="print:hidden bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-4 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Voter Guide
          </Link>
          <h1 className="font-display text-2xl font-bold mb-2">
            Ballot Cheat Sheet
          </h1>
          <p className="text-sage-100 text-sm">
            Print this page or screenshot it to bring to the polls
          </p>
          <button
            className="mt-3 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            id="print-btn"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print This Page
          </button>
          <script
            dangerouslySetInnerHTML={{
              __html: `document.getElementById('print-btn').addEventListener('click',function(){window.print()})`,
            }}
          />
        </div>
      </div>

      {/* Printable content */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:px-0 print:py-2 print:max-w-none">
        {/* Print header */}
        <div className="hidden print:block mb-4 border-b-2 border-black pb-2">
          <h1 className="text-2xl font-bold">
            South Burlington Ballot Cheat Sheet
          </h1>
          <p className="text-sm">
            Town Meeting Day &mdash; Tuesday, March 3, 2026 &mdash; Polls: 7 AM
            - 7 PM
          </p>
        </div>

        {/* Sample Ballot Preview */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-4">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-1 print:text-lg">
            Your Ballot Preview
          </h2>
          <p className="text-warmgray-500 text-sm mb-4 print:mb-2 print:text-xs">
            Here&apos;s what to expect when you get to the polls. Mark your
            choices before you go.
          </p>

          {/* Contested Race */}
          <div className="border-2 border-warmgray-300 rounded-xl p-4 mb-4 print:rounded-md print:p-3 print:mb-3">
            <div className="flex items-center justify-between mb-3 print:mb-2">
              <h3 className="font-display font-bold text-warmgray-800 print:text-sm">
                {contestedRace?.title}
              </h3>
              <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-medium">
                Vote for ONE
              </span>
            </div>
            <div className="space-y-2">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="flex items-center gap-3 p-3 border border-warmgray-200 rounded-lg print:p-2 print:rounded-md"
                >
                  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                  <div>
                    <p className="font-semibold text-warmgray-800 print:text-sm">
                      {candidate.name}
                    </p>
                    <p className="text-warmgray-500 text-xs">
                      {candidate.experience[0]}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 p-3 border border-dashed border-warmgray-200 rounded-lg print:p-2">
                <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                <p className="text-warmgray-400 text-sm italic print:text-xs">
                  Write-in: _______________
                </p>
              </div>
            </div>
          </div>

          {/* Uncontested Races */}
          {uncontestedRaces.map((race: any) => (
            <div
              key={race.id}
              className="border-2 border-warmgray-200 rounded-xl p-4 mb-3 print:rounded-md print:p-3 print:mb-2"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-warmgray-800 text-sm print:text-xs">
                  {race.title}
                </h3>
                <span className="text-xs bg-warmgray-100 text-warmgray-600 px-2 py-0.5 rounded-full font-medium print:text-[10px]">
                  {race.candidates.length > 0 ? "Uncontested" : "Open Seat"}
                </span>
              </div>
              {race.candidates.length > 0 ? (
                <div className="flex items-center gap-3 p-2 border border-warmgray-200 rounded-lg print:p-1.5">
                  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                  <p className="font-medium text-warmgray-800 text-sm print:text-xs">
                    {race.candidates[0].name}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-3 p-2 border border-dashed border-warmgray-200 rounded-lg print:p-1.5">
                  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                  <p className="text-warmgray-400 text-sm italic print:text-xs">
                    Write-in: _______________
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ballot Articles */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-4">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4 print:text-lg print:mb-2">
            Ballot Articles
          </h2>

          {ballotArticles.slice(1).map((article: any, index: number) => (
            <div
              key={article.id}
              className="border-2 border-warmgray-200 rounded-xl p-4 mb-3 print:rounded-md print:p-3 print:mb-2"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-xs font-semibold text-warmgray-500 uppercase">
                    Article {index + 2}
                  </span>
                  <h3 className="font-display font-bold text-warmgray-800 print:text-sm">
                    {article.title}
                  </h3>
                </div>
                {article.amount && (
                  <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                    {article.amount}
                  </span>
                )}
              </div>
              <p className="text-warmgray-600 text-sm mb-3 print:text-xs print:mb-2">
                {article.description}
              </p>
              {article.details?.funding && (
                <p className="text-warmgray-500 text-xs mb-3 print:mb-2">
                  <strong>Funding:</strong> {article.details.funding}
                </p>
              )}
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                  <span className="text-sm font-medium text-warmgray-700 print:text-xs">
                    Yes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" />
                  <span className="text-sm font-medium text-warmgray-700 print:text-xs">
                    No
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Facts Quick Reference */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-4">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4 print:text-lg print:mb-2">
            Key Facts
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 print:gap-2">
            <div className="bg-sage-50 rounded-xl p-3 print:rounded-md print:p-2">
              <p className="text-sage-800 font-semibold text-sm print:text-xs">
                City Budget
              </p>
              <p className="text-warmgray-600 text-xs">
                $58.5M total (+3.55%) &mdash; ~3.3% municipal tax increase
              </p>
            </div>
            <div className="bg-terracotta-50 rounded-xl p-3 print:rounded-md print:p-2">
              <p className="text-terracotta-800 font-semibold text-sm print:text-xs">
                School Budget
              </p>
              <p className="text-warmgray-600 text-xs">
                $73.9M total (+3.4%) &mdash; ~8.76% education tax increase
              </p>
            </div>
            <div className="bg-sage-50 rounded-xl p-3 print:rounded-md print:p-2">
              <p className="text-sage-800 font-semibold text-sm print:text-xs">
                Fire Station Bond
              </p>
              <p className="text-warmgray-600 text-xs">
                $2.3M addition &mdash; $0 property tax impact (fee-funded)
              </p>
            </div>
            <div className="bg-terracotta-50 rounded-xl p-3 print:rounded-md print:p-2">
              <p className="text-terracotta-800 font-semibold text-sm print:text-xs">
                Combined Tax Impact
              </p>
              <p className="text-warmgray-600 text-xs">
                ~7.4% total increase (city + education combined)
              </p>
            </div>
          </div>
        </div>

        {/* Polling Info */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-4">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3 print:text-lg print:mb-2">
            Where to Vote
          </h2>
          <div className="grid sm:grid-cols-2 gap-2 print:gap-1">
            {(election.pollingLocations || []).map(
              (location: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-cream-100 rounded-lg p-2 print:rounded-md print:p-1.5"
                >
                  <span className="w-6 h-6 bg-sage-200 rounded text-sage-700 flex items-center justify-center font-bold text-xs flex-shrink-0 print:w-5 print:h-5">
                    {index + 1}
                  </span>
                  <span className="text-warmgray-700 text-sm print:text-xs">
                    {location}
                  </span>
                </div>
              )
            )}
          </div>
          <p className="text-warmgray-500 text-xs mt-2 print:mt-1">
            Polls open 7:00 AM - 7:00 PM &mdash; Same-day voter registration
            available
          </p>
        </div>

        {/* Screen-only footer */}
        <div className="print:hidden text-center py-6">
          <p className="text-warmgray-500 text-sm mb-4">
            South Burlington Voter Guide 2026 &middot; A nonpartisan community
            resource
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Voter Guide
            </Link>
            <Link
              href="/budget"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm"
            >
              Budget Details
            </Link>
            <Link
              href="/fire-station-bond"
              className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm"
            >
              Fire Station Bond
            </Link>
          </div>
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block border-t border-warmgray-300 pt-2 mt-4">
          <p className="text-[10px] text-warmgray-500">
            South Burlington Voter Guide 2026 &mdash; sbvoterguide.com &mdash;
            A nonpartisan community resource. Verify all information at
            southburlingtonvt.gov.
          </p>
        </div>
      </div>
    </main>
  );
}
