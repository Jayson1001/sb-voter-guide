import Link from "next/link";
import { ElectionDayBadge } from "@/components/GeneralCountdown";
import generalRacesData from "@/data/general-races.json";
import primaryResults from "@/data/primary-results.json";
import type { GeneralRace } from "@/components/GeneralRaceCard";

const SOS_RESULTS = "https://sos.vermont.gov/elections/election-info-resources/elections-results-data";
const SOS_MAIL_BALLOTS = "https://sos.vermont.gov/elections/voters/early-absentee-voting/";
const CITY_ELECTIONS = "https://www.southburlingtonvt.gov/211/Elections-Voting";
const CITY_PRIMARY_RESULTS = "https://www.southburlingtonvt.gov/716/August-11-2026-Vermont-Primary-Results";

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

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArchiveIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

// Dates from Aug 11 on. Each one carries the official source it came from.
const keyDates: { date: string; event: string; type: string; note?: string; badge?: string; href?: string; sources?: { label: string; url: string }[] }[] = [
  { date: "Aug 11", event: "Vermont Primary Election — done", type: "past", note: "Each party picked its November nominees. See who won on the primary results page.", href: "/primary-results" },
  { date: "First half of Oct", event: "General election ballots arrive in mailboxes", type: "milestone", note: "Vermont mails a ballot to every active registered voter. If yours hasn't shown up by mid-October, contact the City Clerk.", sources: [{ label: "Vermont Secretary of State", url: "https://sos.vermont.gov/node/1246" }] },
  { date: "Mon, Nov 2 · noon", event: "Early in-person voting at the City Clerk's office ends", type: "filing", note: "City Clerk's Office, 180 Market Street.", sources: [{ label: "City of South Burlington", url: CITY_ELECTIONS }] },
  { date: "Nov 3", event: "Vermont General Election", type: "election", badge: "Up next", note: "Polls open 7 AM – 7 PM. Same-day registration at the polls. Mailed ballots are due by 7 PM.", sources: [{ label: "Vermont Secretary of State", url: SOS_MAIL_BALLOTS }] },
  { date: "Nov 10", event: "Results canvassed and certified", type: "milestone", note: "Canvassing committees meet one week after the election to certify the results; recount petitions are due within seven days of the election.", sources: [{ label: "17 V.S.A. § 2592", url: "https://legislature.vermont.gov/statutes/section/17/051/02592" }, { label: "17 V.S.A. § 2602", url: "https://legislature.vermont.gov/statutes/section/17/051/02602" }] },
];

// Offices on the November 3 ballot for South Burlington, with candidate
// counts straight from data/general-races.json.
const raceCount = (r: GeneralRace) => `${r.candidates.length} ${r.candidates.length === 1 ? "candidate" : "candidates"}`;
const gr = generalRacesData as unknown as Record<string, GeneralRace[]>;
const generalRaces = [
  ...gr.statewide.map((r) => `${r.shortName}${r.openSeat ? " (open seat)" : ""} — ${raceCount(r)}`),
  ...gr.federal.map((r) => `${r.shortName} — ${raceCount(r)}`),
  `State Senate, Chittenden SE — ${raceCount(gr.stateSenate[0])} for 3 seats`,
  "State House — your district (5 in South Burlington)",
  "Chittenden County: State's Attorney, Sheriff, High Bailiff, Assistant Judges, Probate Judge",
  `Justices of the Peace — ${generalRacesData.justicesOfThePeace.candidates.length} candidates for ${generalRacesData.justicesOfThePeace.seats} seats`,
];

const generalAdditions = [
  "Proposal 3: Right to Collective Bargaining",
  "Proposal 4: Equal Protection of Law",
];

const bond = primaryResults.bond;
const fmt = (n: number) => n.toLocaleString("en-US");

export default function Home() {
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
            <ElectionDayBadge />
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              South Burlington
              <span className="block text-cream-200">Voter Guide 2026</span>
            </h1>
            <p className="text-cream-100 text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
              Everything South Burlington residents need for the 2026 elections. Up next: the general election on November 3.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-cream-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPinIcon />
                <span className="font-medium">South Burlington, VT</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarIcon />
                <span className="font-medium">General Election &bull; Nov 3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3"/>
          </svg>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* General Main Event — the facts people need for November */}
        <section className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl p-6 sm:p-8 mb-8 text-white shadow-soft animate-fade-in">
          <div className="mb-5">
            <span className="inline-block text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wide mb-2">
              Up next &bull; November 3
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-1">The November 3 general election is next</h2>
            <p className="text-sage-50 text-sm sm:text-base leading-relaxed">
              This is the one that decides who actually takes office. Vermont has same-day registration, so there&apos;s still no deadline to register. And November is simpler than August in two ways.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-display font-bold mb-1 flex items-center gap-2">
                <span aria-hidden="true">📬</span> Your ballot comes to you
              </p>
              <p className="text-sage-50 text-sm leading-relaxed">
                Unlike the primary, you don&apos;t have to ask. Vermont mails a general-election ballot to <strong>every</strong> active registered voter. Mail it back, drop it off, or vote in person on Nov 3. Ballots are due by <strong>7 PM on Election Day, November 3</strong> (
                <a href={SOS_MAIL_BALLOTS} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Secretary of State</a>).
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-display font-bold mb-1 flex items-center gap-2">
                <span aria-hidden="true">🗳️</span> One ballot, no party to pick
              </p>
              <p className="text-sage-50 text-sm leading-relaxed">
                No three-ballot shuffle this time. You get one ballot with every party&apos;s nominee (plus independents) side by side, so you can mix and match however you like. (Your State House race depends on your district.)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/general"
              className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-cream-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              See what&apos;s on your ballot — General Guide
              <ArrowRightIcon />
            </Link>
            <Link
              href="/how-to-vote"
              className="inline-flex items-center gap-2 bg-sage-700/40 hover:bg-sage-700/60 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              How to vote
              <ArrowRightIcon />
            </Link>
            <Link
              href="/primary-results"
              className="inline-flex items-center gap-2 bg-sage-700/40 hover:bg-sage-700/60 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              August primary results
              <ArrowRightIcon />
            </Link>
          </div>
        </section>

        {/* General Guide Card — races gateway, right below the main event */}
        <div className="group mb-8 animate-fade-in-delay-1">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-transparent hover:border-sage-300 transition-all">
            <Link href="/general" className="block bg-gradient-to-br from-sage-500 to-sage-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    November 3, 2026 &bull; Up next
                  </span>
                  <h2 className="font-display text-2xl font-bold">General Election Guide</h2>
                  <p className="text-sage-100 text-sm mt-1">Every race on your November ballot — and who&apos;s running for it</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition-colors">
                  <ArrowRightIcon />
                </div>
              </div>
            </Link>
            <div className="p-6">
              <p className="text-warmgray-600 text-xs font-semibold uppercase tracking-wide mb-3">On the ballot</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {[...generalRaces, ...generalAdditions].map((race, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-warmgray-700">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 bg-sage-100 text-sage-700 rounded-full flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    {race}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-warmgray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-warmgray-600">
                  No city or school questions this time. Candidate list:{" "}
                  <a href={generalRacesData.candidateSource.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                    Vermont Secretary of State
                  </a>{" "}
                  (updated Sept 23, 2026); ballot contents:{" "}
                  <a href={CITY_ELECTIONS} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                    City sample ballots
                  </a>
                  .
                </p>
                <Link
                  href="/general"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 bg-sage-50 hover:bg-sage-100 border border-sage-200 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
                >
                  See every race
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Primary results card — what August settled */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8 animate-fade-in-delay-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <span className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide">August 11 primary &bull; Results</span>
              <h2 className="font-display text-xl font-bold text-warmgray-800 mt-1 mb-2">Party nominees from the primary</h2>
              <p className="text-xs text-warmgray-600 mb-2">
                With their November ballot labels. Some races also have independent or minor-party candidates &mdash;{" "}
                <Link href="/general" className="underline hover:text-sage-700">see the full ballot</Link>.
              </p>
              <ul className="space-y-1.5 text-sm text-warmgray-700">
                <li><strong>Governor:</strong> Amanda Janoo (Dem/Prog) and Phil Scott (Republican), plus 3 other candidates.</li>
                <li><strong>Lt. Governor:</strong> Molly Gray (Democratic) and John S. Rodgers (Republican).</li>
                <li><strong>U.S. House:</strong> Becca Balint (Democratic) and Gerald Malloy (Republican), plus 4 other candidates.</li>
                <li><strong>Treasurer:</strong> Mike Pieciak (Democratic), Zachary Hampl (Progressive), and Lynn LaFleur (Republican).</li>
                <li><strong>Secretary of State:</strong> Sarah Copeland Hanzas (Democratic), Rachel Shaw (Progressive), and H. Brooke Paige (Republican).</li>
                <li><strong>Auditor:</strong> Tim Ashe (Democratic) and Ivar Kronick (Republican).</li>
                <li><strong>Attorney General:</strong> Charity R. Clark (Democratic) and Edwin Howell Kemon (Republican).</li>
                <li>
                  <strong>About the Republican changes:</strong> H. Brooke Paige won the Republican primaries for Treasurer,
                  Secretary of State, Auditor, and Attorney General, then withdrew from all but Secretary of State. LaFleur,
                  Kronick, and Kemon are the Republican nominees on the November ballot.
                </li>
                <li>
                  <strong>State Senate, Chittenden SE:</strong> Thomas Chittenden, Virginia &ldquo;Ginny&rdquo; Lyons, and Kesha
                  Ram Hinsdale (Democratic); Bruce Roy, Javen Sears, and Rohan St Marthe (Republican; St Marthe as a write-in).
                </li>
                <li>
                  <strong>State House:</strong> none of South Burlington&apos;s House primaries was contested. Nominees:
                  Bridget Burkhardt, Emilie Krasnow, Kate Nugent, Brian Minier, and Martin J. LaLonde (Democratic), plus
                  Mitchel Cypes (Republican) in Chittenden-8.
                </li>
                <li>
                  <strong>County:</strong> State&apos;s Attorney, Sarah George (Dem/Prog) and Jace Laquerre (Republican;
                  Bram Kranichfeld won that nomination by write-in and later withdrew); Sheriff, Daniel Gamelin (Dem/Rep);
                  High Bailiff, Amy Payne (Democratic) and Paul McManus (Republican), plus 1 other candidate; Assistant
                  Judges, Connie Cain Ramsey and Anne Nichols Williams (Dem/Rep); Probate Judge, Gregory J. Glennon (Dem/Rep).
                </li>
                <li>
                  <strong>Bartlett Bay bond:</strong> approved, {fmt(bond.votesYes)} yes to {fmt(bond.votesNo)} no (
                  <a href={CITY_PRIMARY_RESULTS} target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 underline">City of South Burlington</a>).
                </li>
              </ul>
              <p className="text-xs text-warmgray-600 mt-3">
                Source:{" "}
                <a href={SOS_RESULTS} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                  Vermont Secretary of State official results
                </a>{" "}
                (canvass dated August 17, 2026).
              </p>
            </div>
            <Link
              href="/primary-results"
              className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 bg-sage-50 hover:bg-sage-100 border border-sage-200 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              Full primary results
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8 animate-fade-in-delay-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗳️</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">About This Guide</h2>
              <p className="text-warmgray-600 leading-relaxed">
                The August 11 primary picked each party&apos;s nominees; the November 3 general election picks who takes office.
                This independent, nonpartisan guide covers every race on South Burlington&apos;s November ballot — from Governor down to your local State House representative.
              </p>
              <p className="text-warmgray-600 text-sm mt-2">
                Primary results and the archived primary guide are still here if you want to look back.
              </p>
            </div>
          </div>
        </div>

        {/* Same-Day Registration Banner */}
        <div className="bg-gradient-to-r from-sage-50 to-sage-100 border border-sage-200 rounded-2xl p-5 sm:p-6 mb-8 animate-fade-in-delay-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center">
              <CheckIcon />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-lg font-bold text-sage-800 mb-1">No Registration Deadline in Vermont</h2>
              <p className="text-warmgray-700 text-sm leading-relaxed mb-3">
                Vermont has same-day voter registration. You can register and vote on the same day — including at your polling place on Election Day. There is no cutoff date to register.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://mvp.vermont.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-sage-500 hover:bg-sage-600 px-4 py-2 rounded-lg transition-colors"
                >
                  Register Online
                  <ArrowRightIcon />
                </a>
                <Link
                  href="/how-to-vote"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 bg-white border border-sage-200 hover:border-sage-300 px-4 py-2 rounded-lg transition-colors"
                >
                  How to Vote
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* What's New / Changelog */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <div className="flex items-center justify-between gap-3 mb-3">
            <h2 className="font-display text-lg font-bold text-warmgray-800">What&apos;s New</h2>
            <span className="text-xs text-warmgray-600 font-medium">Updated October 8, 2026</span>
          </div>
          <ul className="space-y-2 text-sm text-warmgray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta-500 flex-shrink-0" />
              <span><strong>The guide now points at November 3.</strong> The <Link href="/general" className="text-sage-600 hover:text-sage-800 underline">general election guide</Link> is front and center; the August guide is archived at <Link href="/primary" className="text-sage-600 hover:text-sage-800 underline">/primary</Link>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>New: <Link href="/primary-results" className="text-sage-600 hover:text-sage-800 underline">August 11 primary results</Link></strong>, statewide and in South Burlington, plus the Bartlett Bay bond &mdash; official totals from the Secretary of State, plus South Burlington figures (the official canvass for federal and statewide races; the City Clerk&apos;s unofficial count for Senate, House, and county races).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span>
                <strong>The November ballot is set</strong>, per the{" "}
                <a href={generalRacesData.candidateSource.url} target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">Secretary of State&apos;s candidate list</a>.
                Besides the party nominees, independents Phoenix K. Altair, Adam Ortiz, Suzanne &ldquo;Suz&rdquo; Seymour, and
                Ryan P. Walton are running for U.S. House, Brian Judd for Governor, and Sean Miller for High Bailiff. Lynn LaFleur,
                Ivar Kronick, Edwin Howell Kemon, and Jace Laquerre are the Republican nominees in races where the primary winner later withdrew. Every
                race is on the <Link href="/general" className="text-sage-600 hover:text-sage-800 underline">general election guide</Link>.
              </span>
            </li>
          </ul>
          <p className="text-sm text-warmgray-600 mt-3 flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-warmgray-300 flex-shrink-0" />
            <span>
              <strong>Through July 22, 2026:</strong> the guide covered the August 11 primary &mdash; the candidates on each
              party&apos;s ballot, the Bartlett Bay bond question, and early voting. That guide is archived at{" "}
              <Link href="/primary" className="text-sage-600 hover:text-sage-800 underline">/primary</Link>.
            </span>
          </p>
        </div>

        {/* Key Dates Timeline */}
        <div className="mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">Key Dates</h2>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <ol className="relative border-l-2 border-warmgray-100 ml-3 space-y-5">
              {keyDates.map((item, i) => {
                const dot =
                  item.type === 'election'  ? 'bg-terracotta-500' :
                  item.type === 'past'      ? 'bg-warmgray-200' :
                  item.type === 'now'       ? 'bg-terracotta-500' :
                  item.type === 'milestone' ? 'bg-sage-300' :
                                              'bg-warmgray-300';
                return (
                  <li key={i} className="ml-6 relative">
                    <span className={`absolute -left-[34px] top-1.5 w-4 h-4 rounded-full ring-4 ring-white ${dot}`} />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="font-display text-base font-bold text-warmgray-800">{item.date}</p>
                      {item.badge && (
                        <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-0.5 ${item.type === 'past' ? 'text-warmgray-600' : 'text-warmgray-700'}`}>
                      {item.href ? (
                        <Link href={item.href} className="underline hover:text-sage-700">{item.event}</Link>
                      ) : (
                        item.event
                      )}
                    </p>
                    {item.note && (
                      <p className="text-warmgray-600 text-xs mt-1">
                        {item.note}
                        {item.sources && (
                          <>
                            {" "}Source:{" "}
                            {item.sources.map((src, k) => (
                              <span key={src.url}>
                                {k > 0 && " · "}
                                <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                                  {src.label}
                                </a>
                              </span>
                            ))}
                          </>
                        )}
                      </p>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Down-ballot heads-up: JPs are a November-only race */}
        <div className="bg-gradient-to-r from-sage-50 to-cream-100 border border-sage-100 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">🗳️</span>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-warmgray-800 mb-1">New on the November ballot: Justices of the Peace</h3>
              <p className="text-warmgray-700 text-sm leading-relaxed">
                They weren&apos;t on the August ballot — JPs are elected in November. South Burlington has {generalRacesData.justicesOfThePeace.candidates.length} candidates for {generalRacesData.justicesOfThePeace.seats} seats this year. If you&apos;ve never been sure what a JP does, you&apos;re in good company; we point you to the official answer on the <Link href="/general#justices-of-the-peace" className="text-sage-700 hover:text-sage-900 underline">general election guide</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Voter Info Strip */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-lg font-bold text-warmgray-800 mb-4">Voting in South Burlington</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
            >
              <div className="w-9 h-9 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-warmgray-800 text-sm">Register to Vote</p>
                <p className="text-xs text-warmgray-600">Same-day registration available — no deadline</p>
              </div>
            </a>
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
            >
              <div className="w-9 h-9 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 flex-shrink-0">
                <MapPinIcon />
              </div>
              <div>
                <p className="font-medium text-warmgray-800 text-sm">Find Your District</p>
                <p className="text-xs text-warmgray-600">SB spans multiple House districts</p>
              </div>
            </a>
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
            >
              <div className="w-9 h-9 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-warmgray-800 text-sm">Mail Ballots</p>
                <p className="text-xs text-warmgray-600">Nov 3 general: mailed to every active registered voter automatically.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Also on the ballot + looking ahead */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-4">

            {/* Ballot measures */}
            <Link href="/ballot-measures" className="group block">
              <div className="bg-white rounded-2xl border border-warmgray-200 p-5 h-full hover:border-sage-300 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block bg-sage-50 text-sage-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                      Also on Nov 3
                    </span>
                    <h3 className="font-display text-lg font-bold text-warmgray-800">Two constitutional amendments</h3>
                  </div>
                  <span className="text-warmgray-300 group-hover:text-sage-500 transition-colors">
                    <ArrowRightIcon />
                  </span>
                </div>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  Every voter gets these, whatever district you&apos;re in. Plain-English summaries and the arguments on both sides.
                </p>
                <ul className="mt-3 space-y-1">
                  {generalAdditions.map((item, i) => (
                    <li key={i} className="text-xs text-warmgray-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-sage-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>

            {/* Leadership 2027 (moved down, muted) */}
            <div className="bg-white rounded-2xl border border-warmgray-200 p-5">
              <span className="inline-block bg-warmgray-100 text-warmgray-600 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                Looking ahead to 2027
              </span>
              <h3 className="font-display text-base font-bold text-warmgray-700 mb-1">New leadership coming to Montpelier</h3>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                Both House Speaker <strong>Jill Krowinski</strong> (D-Burlington) and Senate President Pro Tem <strong>Phil Baruth</strong> (D/P-Chittenden Central) aren&apos;t seeking reelection — so both chambers get new leaders in the 2027 session, the first open contest for both top posts in years.
              </p>
            </div>
          </div>
        </section>

        {/* Past results */}
        <div className="bg-warmgray-50 border border-warmgray-200 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-warmgray-200 rounded-xl flex items-center justify-center text-warmgray-600 flex-shrink-0">
              <ArchiveIcon />
            </div>
            <p className="font-display font-semibold text-warmgray-700">Past results</p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-xl p-4">
              <div>
                <p className="font-medium text-warmgray-700">August 11, 2026 Vermont Primary</p>
                <p className="text-warmgray-600 text-sm">Party nominations, plus the Bartlett Bay bond</p>
              </div>
              <Link
                href="/primary-results"
                className="inline-flex items-center gap-2 text-sm font-medium text-warmgray-600 hover:text-warmgray-800 bg-white border border-warmgray-200 hover:border-warmgray-300 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
              >
                View Results
                <ArrowRightIcon />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white rounded-xl p-4">
              <div>
                <p className="font-medium text-warmgray-700">March 2026 Town Meeting Day</p>
                <p className="text-warmgray-600 text-sm">Beth Zigmund elected to City Council &bull; All ballot articles passed</p>
              </div>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 text-sm font-medium text-warmgray-600 hover:text-warmgray-800 bg-white border border-warmgray-200 hover:border-warmgray-300 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
              >
                View Results
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-display font-bold text-warmgray-800 mb-2">About This Guide</h3>
            <p className="text-warmgray-600 text-sm leading-relaxed mb-3">
              An independent, nonpartisan community resource for South Burlington voters. Information is compiled
              from official sources, candidate materials, and trusted news coverage.
            </p>
            <p className="text-xs text-warmgray-600 mb-4">
              All positions sourced from publicly available materials. Not affiliated with the City of South Burlington or any candidate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-warmgray-100">
              <Link href="/how-to-vote" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                How to Vote
              </Link>
              <span className="hidden sm:inline text-warmgray-300">&middot;</span>
              <Link href="/about" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About the Author
              </Link>
              <span className="hidden sm:inline text-warmgray-300">&middot;</span>
              <Link href="/sources" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Sources & Citations
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
