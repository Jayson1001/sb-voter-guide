import Link from "next/link";
import generalRaces from "@/data/general-races.json";
import ballotMeasuresData from "@/data/ballot-measures.json";
import votingInfo from "@/data/voting-info.json";
import SampleBallotLinks from "@/components/SampleBallotLinks";
import type { GeneralRace } from "@/components/GeneralRaceCard";

export const metadata = {
  title: "Ballot Cheat Sheet — November 3, 2026 — South Burlington Voter Guide",
  description:
    "Print-friendly practice ballot for South Burlington's November 3, 2026 general election: every race, every candidate as printed on the ballot, Proposals 3 and 4, and where to vote.",
  alternates: { canonical: "/cheat-sheet" },
};

const numberWords = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE"];
const voteForLabel = (n: number) => `Vote for ${numberWords[n] ?? n}`;

const Box = () => (
  <div className="w-5 h-5 border-2 border-warmgray-400 rounded flex-shrink-0 print:w-4 print:h-4" aria-hidden="true" />
);

function WriteIn() {
  return (
    <div className="flex items-center gap-3 p-2 border border-dashed border-warmgray-200 rounded-lg print:p-1">
      <Box />
      <p className="text-warmgray-600 text-sm italic print:text-xs">Write-in: _______________</p>
    </div>
  );
}

function RaceBlock({ race, heading }: { race: GeneralRace; heading?: string }) {
  return (
    <div className="border-2 border-warmgray-200 rounded-xl p-4 mb-3 break-inside-avoid print:rounded-md print:p-2 print:mb-2">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="font-display font-bold text-warmgray-800 text-sm print:text-xs">
          {heading ?? race.office}
          {race.district && !heading ? ` — ${race.district}` : ""}
        </h3>
        <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap print:text-[10px]">
          {voteForLabel(race.voteFor)}
        </span>
      </div>
      <div className="space-y-1.5">
        {race.candidates.map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-2 border border-warmgray-200 rounded-lg print:p-1">
            <Box />
            <p className="text-sm text-warmgray-800 print:text-xs">
              <span className="font-medium">{c.name}</span>
              <span className="text-warmgray-600"> &middot; {c.ballotLabel}{c.town ? ` · ${c.town}` : ""}</span>
            </p>
          </div>
        ))}
        {Array.from({ length: race.voteFor }).map((_, i) => (
          <WriteIn key={i} />
        ))}
      </div>
    </div>
  );
}

export default function CheatSheetPage() {
  const statewide = generalRaces.statewide as GeneralRace[];
  const federal = generalRaces.federal as GeneralRace[];
  const senate = generalRaces.stateSenate as GeneralRace[];
  const house = generalRaces.stateHouse as GeneralRace[];
  const county = generalRaces.county as GeneralRace[];
  const jp = generalRaces.justicesOfThePeace;
  const measures = ballotMeasuresData.measures;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Screen-only header */}
      <div className="print:hidden bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Voter Guide
          </Link>
          <h1 className="font-display text-2xl font-bold mb-2">Ballot Cheat Sheet &mdash; November 3</h1>
          <p className="text-sage-100 text-sm">
            A practice copy of your ballot. Mark it up at the kitchen table, then bring it along (or just copy your
            choices onto the real one).
          </p>
          <button
            className="mt-3 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            id="print-btn"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
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

      <div className="max-w-4xl mx-auto px-4 py-6 print:px-0 print:py-2 print:max-w-none">
        {/* Print header */}
        <div className="hidden print:block mb-4 border-b-2 border-black pb-2">
          <h1 className="text-2xl font-bold">South Burlington Ballot Cheat Sheet</h1>
          <p className="text-sm">General Election &mdash; Tuesday, November 3, 2026 &mdash; Polls: 7 AM - 7 PM</p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-3">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-1 print:text-lg">Your ballot, practice edition</h2>
          <p className="text-warmgray-600 text-sm leading-relaxed print:text-xs">
            Candidates are listed alphabetically with the party label printed on the ballot, from the{" "}
            <a href={generalRaces.candidateSource.url} target="_blank" rel="noopener noreferrer" className="text-sage-700 underline">
              Secretary of State&apos;s official candidate list
            </a>
            . Your real ballot has only <strong>one</strong> State House race &mdash; the one for your district. To see
            your exact ballot, open your district&apos;s sample ballot: <SampleBallotLinks />
          </p>
        </div>

        {/* Ballot measures */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-3">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3 print:text-lg print:mb-2">Constitutional amendments</h2>
          {measures.map((m) => (
            <div key={m.id} className="border-2 border-warmgray-200 rounded-xl p-4 mb-3 break-inside-avoid print:rounded-md print:p-2 print:mb-2">
              <span className="text-xs font-semibold text-warmgray-600 uppercase">{m.number}</span>
              <h3 className="font-display font-bold text-warmgray-800 print:text-sm">{m.title}</h3>
              <p className="text-warmgray-600 text-xs mb-2">{m.subtitle}</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2"><Box /><span className="text-sm font-medium text-warmgray-700 print:text-xs">Yes</span></div>
                <div className="flex items-center gap-2"><Box /><span className="text-sm font-medium text-warmgray-700 print:text-xs">No</span></div>
              </div>
            </div>
          ))}
          <p className="text-xs text-warmgray-600 print:text-[10px]">
            The ballot prints the full official text of each proposal. <Link href="/ballot-measures" className="underline print:no-underline">Plain-English guide</Link>.
          </p>
        </div>

        {/* Races */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 print:shadow-none print:rounded-none print:p-0 print:mb-3">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3 print:text-lg print:mb-2">Federal &amp; statewide</h2>
          {[...federal, ...statewide].map((r) => <RaceBlock key={r.id} race={r} />)}

          <h2 className="font-display text-xl font-bold text-warmgray-800 mt-5 mb-3 print:text-lg print:mb-2">Legislature</h2>
          {senate.map((r) => <RaceBlock key={r.id} race={r} heading="State Senator — Chittenden Southeast" />)}
          <p className="text-xs text-warmgray-600 mb-2 print:text-[10px]">
            State Representative: find your district at mvp.vermont.gov, then use just that one.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-3 print:grid-cols-2">
            {house.map((r) => <RaceBlock key={r.id} race={r} heading={`State Rep — ${r.district}`} />)}
          </div>

          <h2 className="font-display text-xl font-bold text-warmgray-800 mt-5 mb-3 print:text-lg print:mb-2">Chittenden County</h2>
          {county.map((r) => <RaceBlock key={r.id} race={r} heading={r.office} />)}

          <h2 className="font-display text-xl font-bold text-warmgray-800 mt-5 mb-3 print:text-lg print:mb-2">Justices of the Peace</h2>
          <div className="border-2 border-warmgray-200 rounded-xl p-4 break-inside-avoid print:rounded-md print:p-2">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-sm text-warmgray-600 print:text-xs">
                {jp.candidates.length} candidates for {jp.seats} seats
              </p>
              <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap print:text-[10px]">
                Vote for up to FIFTEEN
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-1.5 print:grid-cols-2">
              {jp.candidates.map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-2 border border-warmgray-200 rounded-lg print:p-1">
                  <Box />
                  <p className="text-sm text-warmgray-800 print:text-xs">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-warmgray-600"> &middot; {c.ballotLabel}</span>
                  </p>
                </div>
              ))}
              <WriteIn />
            </div>
          </div>
        </div>

        {/* Where to vote */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-6 break-inside-avoid print:shadow-none print:rounded-none print:p-0 print:mb-3">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3 print:text-lg print:mb-2">Where &amp; when to vote</h2>
          <div className="grid sm:grid-cols-2 gap-2 print:gap-1">
            {votingInfo.pollingPlacesByDistrict.map((loc) => (
              <div key={loc.district} className="bg-cream-100 rounded-lg p-2 text-sm text-warmgray-700 print:rounded-md print:p-1.5 print:text-xs">
                <strong>{loc.district}:</strong> {loc.name}, {loc.address}
              </div>
            ))}
          </div>
          <ul className="text-warmgray-600 text-xs mt-3 space-y-1 print:mt-1">
            <li>Polls open 7 AM &ndash; 7 PM on Tuesday, November 3. Same-day registration available.</li>
            <li>Early voting at the City Clerk&apos;s Office (180 Market Street) ends at noon on Monday, November 2.</li>
            <li>Mailed ballots are due by 7 PM on November 3; the 24/7 drop box is at City Hall.</li>
          </ul>
          <p className="text-[11px] text-warmgray-600 mt-2">
            Source:{" "}
            <a href={votingInfo.pollingPlacesSource.url} target="_blank" rel="noopener noreferrer" className="underline">
              {votingInfo.pollingPlacesSource.title}
            </a>
          </p>
        </div>

        {/* Screen-only footer */}
        <div className="print:hidden text-center py-6">
          <p className="text-warmgray-600 text-sm mb-4">South Burlington Voter Guide 2026 &middot; A nonpartisan community resource</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/general" className="text-sage-600 hover:text-sage-800 font-medium text-sm">General Election Guide</Link>
            <Link href="/ballot-measures" className="text-sage-600 hover:text-sage-800 font-medium text-sm">Ballot Measures</Link>
            <Link href="/how-to-vote" className="text-sage-600 hover:text-sage-800 font-medium text-sm">How to Vote</Link>
          </div>
        </div>

        {/* Print-only footer */}
        <div className="hidden print:block border-t border-warmgray-300 pt-2 mt-4">
          <p className="text-[10px] text-warmgray-600">
            South Burlington Voter Guide 2026 &mdash; sbvoterguide.com &mdash; A nonpartisan community resource. Verify
            everything against your sample ballot at southburlingtonvt.gov.
          </p>
        </div>
      </div>
    </main>
  );
}
