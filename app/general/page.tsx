import Link from "next/link";
import generalRaces from "@/data/general-races.json";
import ballotMeasuresData from "@/data/ballot-measures.json";
import votingInfo from "@/data/voting-info.json";
import OfficeExplainer from "@/components/OfficeExplainer";
import GeneralRaceCard, { BallotLabelChip, type GeneralRace } from "@/components/GeneralRaceCard";
import SampleBallotLinks from "@/components/SampleBallotLinks";

const SOS_CANDIDATES = generalRaces.candidateSource;
const CITY_ELECTIONS = votingInfo.pollingPlacesSource;
const SOS_MAIL_BALLOTS = "https://sos.vermont.gov/elections/voters/early-absentee-voting/";
const SOS_REGISTRATION = "https://sos.vermont.gov/elections/voters/registration/";

export const metadata = {
  title: "What's on your Nov 3 ballot? — South Burlington General Election Guide",
  description:
    "Every race on your November 3, 2026 South Burlington ballot, in plain English — Governor, Lt. Governor, U.S. House, the Chittenden-Southeast Senate, your State House district, Justices of the Peace, and Proposals 3 & 4. Independent and nonpartisan.",
  alternates: { canonical: "/general" },
  openGraph: {
    title: "What's on your Nov 3 ballot?",
    description: "Every South Burlington race on the November 3 general election ballot, in plain English.",
    url: "https://www.sbvoterguide.com/general",
  },
};

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

// Race cards live in components/GeneralRaceCard.tsx and read
// data/general-races.json (the Nov 3 ballot). data/races.json stays as the
// archived pre-primary snapshot that /primary renders.

function BallotMeasureCard({ measure }: { measure: any }) {
  const isConfirmed = measure.status === "confirmed";
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
      <div className={`px-6 py-4 ${isConfirmed ? 'bg-gradient-to-r from-sage-500 to-sage-600' : 'bg-gradient-to-r from-warmgray-500 to-warmgray-600'}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
              {measure.number}
            </span>
            <h3 className="font-display text-xl font-bold text-white">{measure.title}</h3>
            <p className="text-white/80 text-sm mt-0.5">{measure.subtitle}</p>
          </div>
          <span className={`flex-shrink-0 text-xs px-2 py-1 rounded-full font-semibold ${isConfirmed ? 'bg-white/20 text-white' : 'bg-white/20 text-white'}`}>
            {isConfirmed ? 'On the Nov 3 ballot' : 'Pending'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-warmgray-600 text-sm leading-relaxed mb-4">{measure.plainLanguageSummary}</p>

        <div className="bg-warmgray-50 rounded-xl p-4 mb-4">
          <p className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide mb-2">Key language (excerpt)</p>
          <p className="text-warmgray-700 text-sm italic leading-relaxed">&ldquo;{measure.proposedConstitutionalText}&rdquo;</p>
          <p className="text-xs text-warmgray-600 mt-2">
            Exact wording is on your sample ballot: <SampleBallotLinks />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide mb-2">Arguments For</p>
            <ul className="space-y-1.5">
              {measure.arguments.for.slice(0, 3).map((arg: string, i: number) => (
                <li key={i} className="text-xs text-warmgray-600 flex items-start gap-1.5">
                  <span className="mt-1 w-3 h-3 rounded-full bg-sage-100 text-sage-600 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {arg}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-terracotta-700 uppercase tracking-wide mb-2">Arguments Against</p>
            <ul className="space-y-1.5">
              {measure.arguments.against.slice(0, 3).map((arg: string, i: number) => (
                <li key={i} className="text-xs text-warmgray-600 flex items-start gap-1.5">
                  <span className="mt-1 w-3 h-3 rounded-full bg-terracotta-50 text-terracotta-700 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  {arg}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/ballot-measures"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-800 transition-colors"
        >
          Full guide to {measure.number}
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

export default function GeneralPage() {
  const statewide = generalRaces.statewide as GeneralRace[];
  const federal = generalRaces.federal as GeneralRace[];
  const stateSenate = generalRaces.stateSenate as GeneralRace[];
  const stateHouse = generalRaces.stateHouse as GeneralRace[];
  const county = generalRaces.county as GeneralRace[];
  const jp = generalRaces.justicesOfThePeace;
  const measures = ballotMeasuresData.measures;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                November 3, 2026
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Vermont General Election</h1>
              <p className="text-sage-100 text-base sm:text-lg">All races + two constitutional amendments on the ballot</p>
            </div>
            <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 text-white text-center">
              <p className="text-sage-100 text-xs font-medium uppercase tracking-wide">Election Day</p>
              <p className="font-display text-2xl font-bold">Nov 3, 2026</p>
              <p className="text-sage-100 text-sm">7 AM – 7 PM</p>
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

        {/* Ballot status notice */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center text-sage-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sage-800">This is the actual November ballot</p>
            <p className="text-sage-700 text-sm mt-0.5 leading-relaxed">
              Every candidate below is on the{" "}
              <a href={SOS_CANDIDATES.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-900">
                Secretary of State&apos;s official qualified-candidate list
              </a>{" "}
              (updated September 23, 2026), which matches the City&apos;s sample ballots. Each party picked its
              nominees on August 11 (<Link href="/primary-results" className="underline hover:text-sage-900">see the results</Link>).
              No city or school questions are on this ballot.
            </p>
            <p className="text-sage-700 text-sm mt-2">
              See your exact ballot (City of South Burlington sample ballots, by House district): <SampleBallotLinks />
            </p>
          </div>
        </div>

        {/* Ballot Measures — featured first since they're confirmed now */}
        <section className="mb-10">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-warmgray-800">Ballot Measures</h2>
                <p className="text-warmgray-600 text-sm">Two constitutional amendments — on every South Burlington ballot</p>
              </div>
            </div>
            <Link
              href="/ballot-measures"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-800 bg-sage-50 hover:bg-sage-100 px-4 py-2 rounded-lg transition-colors"
            >
              Full guides
              <ArrowRightIcon />
            </Link>
          </div>
          <div className="space-y-6">
            {measures.map((measure) => (
              <BallotMeasureCard key={measure.id} measure={measure} />
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <Link href="/ballot-measures" className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-800">
              Read full ballot measure guides
              <ArrowRightIcon />
            </Link>
          </div>
        </section>

        {/* How to read the race cards */}
        <div className="bg-cream-50 border border-warmgray-200 rounded-xl p-4 mb-8 text-sm text-warmgray-600 leading-relaxed">
          <p>
            <strong className="text-warmgray-700">Reading the race cards:</strong> candidates are listed alphabetically by
            last name, with the party label exactly as it&apos;s printed on the ballot. Some names carry two labels, like{" "}
            <BallotLabelChip label="Dem/Prog" /> or <BallotLabelChip label="Dem/Rep" /> &mdash; Vermont lets more than one
            party nominate the same person, so they show up once with both. Every race also has a write-in line. Tap
            &ldquo;About this candidate&rdquo; for whatever background we&apos;ve sourced so far.
          </p>
        </div>

        {/* Statewide Races */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont Statewide Offices</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {statewide.map((race) => (
              <GeneralRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Federal */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">Federal Office</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {federal.map((race) => (
              <GeneralRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Vermont State Senate */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont State Senate</h2>
              <p className="text-warmgray-600 text-sm">Chittenden Southeast district — 3 seats, vote for up to three</p>
            </div>
          </div>
          <div className="space-y-5">
            {stateSenate.map((race) => (
              <GeneralRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Vermont State House */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Vermont House of Representatives</h2>
              <p className="text-warmgray-600 text-sm">5 South Burlington districts — you vote in just one</p>
            </div>
          </div>

          <div className="bg-sage-50 border border-sage-200 rounded-xl p-4 mb-5 flex items-start gap-3">
            <svg className="w-5 h-5 text-sage-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-sage-800">
              <strong>Find your district:</strong> South Burlington spans five Vermont House districts.
              Use{" "}
              <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-900">
                My Voter Page (mvp.vermont.gov)
              </a>
              {" "}to confirm which district you&apos;re in based on your address.
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {stateHouse.map((race) => (
              <GeneralRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Chittenden County offices — on the November ballot too. Cards show
            races.json data, which is still pre-primary (see build-notes item 5). */}
        <section id="county" className="mb-10 scroll-mt-32">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800">Chittenden County Offices</h2>
              <p className="text-warmgray-600 text-sm">Same for every South Burlington voter — no district lookup needed</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {county.map((race) => (
              <GeneralRaceCard key={race.id} race={race} />
            ))}
          </div>
        </section>

        {/* Justices of the Peace — elected in November only, not in the primary */}
        <section id="justices-of-the-peace" className="mb-10 scroll-mt-32">
          <div className="bg-white rounded-2xl shadow-soft p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h2 className="font-display text-xl font-bold text-warmgray-800">Justices of the Peace</h2>
              <div className="flex-shrink-0 text-xs text-warmgray-600 text-right">
                <p>{jp.termYears}-yr term</p>
                <p className="font-semibold text-warmgray-700 mt-0.5">Vote for up to {jp.voteFor}</p>
              </div>
            </div>
            <p className="text-warmgray-600 text-sm leading-relaxed mb-3">
              New this round: JPs weren&apos;t on the August primary ballot &mdash; they&apos;re elected in November.
              This year South Burlington has <strong>{jp.candidates.length} candidates for {jp.seats} seats</strong>, so
              you can vote for every name on the list and still have one vote left for a write-in.{" "}
              {jp.termNote}{" "}
              <span className="text-xs">
                (Source:{" "}
                <a href={jp.termSource.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                  {jp.termSource.title}
                </a>
                )
              </span>
            </p>
            <div className="mb-4">
              <OfficeExplainer office={jp.office} />
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {jp.candidates.map((c) => (
                <li key={c.name} className="flex flex-wrap items-center gap-2 p-2.5 rounded-xl bg-cream-50 border border-warmgray-100">
                  <span className="font-medium text-warmgray-800 text-sm">{c.name}</span>
                  <BallotLabelChip label={c.ballotLabel} />
                </li>
              ))}
            </ul>
            <p className="text-xs text-warmgray-600 mt-3">
              Source:{" "}
              {jp.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && " · "}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                    {s.title}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* Voter Info */}
        <div className="bg-white rounded-2xl shadow-soft p-6 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">General Election Voting Info</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-warmgray-700 mb-1">Polling Hours</p>
              <p className="text-warmgray-600">7:00 AM – 7:00 PM on Tuesday, November 3, 2026</p>
              <p className="text-warmgray-700 mt-3 font-semibold">Where to vote, by House district</p>
              <ul className="mt-1 space-y-1">
                {votingInfo.pollingPlacesByDistrict.map((loc) => (
                  <li key={loc.district} className="text-warmgray-600 flex items-start gap-1.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta-400 flex-shrink-0" />
                    <span>
                      <strong className="font-medium text-warmgray-700">{loc.district}:</strong> {loc.name}, {loc.address}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-warmgray-600 mt-2">
                Source:{" "}
                <a href={CITY_ELECTIONS.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                  {CITY_ELECTIONS.title}
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Mail Ballots</p>
                <p className="text-warmgray-600">
                  Vermont mails a general-election ballot to every active registered voter. Mail it back, drop it in the
                  24/7 drop box at City Hall (near the main and back entrances), return it in person at City Hall, or
                  bring it to your polling place. Ballots are due by <strong>7 p.m. on November 3</strong>.{" "}
                  <span className="text-xs">
                    (Sources:{" "}
                    <a href={SOS_MAIL_BALLOTS} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">Vermont Secretary of State</a>
                    {" · "}
                    <a href={CITY_ELECTIONS.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">City of South Burlington</a>)
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Early Voting</p>
                <p className="text-warmgray-600">
                  Vote early at the City Clerk&apos;s Office, 180 Market Street, until <strong>noon on Monday, November 2</strong>.{" "}
                  <span className="text-xs">
                    (Source:{" "}
                    <a href={CITY_ELECTIONS.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">City of South Burlington</a>)
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Voter Registration</p>
                <p className="text-warmgray-600">
                  Same-day registration is available, including at the polls on Election Day (
                  <a href={SOS_REGISTRATION} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">Vermont Secretary of State</a>
                  ).{" "}
                  <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="text-terracotta-700 hover:text-terracotta-800 underline">
                    Register or check your registration at mvp.vermont.gov
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-1">Official Resources</p>
                <a href="https://sos.vermont.gov/elections/" target="_blank" rel="noopener noreferrer" className="text-terracotta-700 hover:text-terracotta-800 underline">
                  Vermont Secretary of State — Elections<ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Link
            href="/primary-results"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon />
            August 11 Primary Results
          </Link>
          <Link
            href="/ballot-measures"
            className="flex-1 flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            Full Ballot Measure Guides
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
