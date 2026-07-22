import Link from "next/link";
import PrimaryCountdown from "@/components/PrimaryCountdown";

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
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const keyDates: { date: string; event: string; type: string; note?: string; badge?: string }[] = [
  { date: "Now", event: "Early voting open for the August 11 primary", type: "now", badge: "Live", note: "Request an absentee ballot or vote in person at the City Clerk's office" },
  { date: "Aug 6", event: "Independent candidate filing deadline", type: "filing", note: "Last day for independents to file for the November ballot" },
  { date: "Aug 10", event: "Last day to request an absentee ballot online or register online for the primary", type: "filing", note: "Exact clerk cutoff times vary. Same-day registration is available at the polls on Election Day." },
  { date: "Aug 11", event: "Vermont Primary Election", type: "election", note: "Polls open 7 AM – 7 PM. Same-day registration at the polls." },
  { date: "Late Sept – Oct 1", event: "General election ballots mailed", type: "milestone", note: "Vermont mails a ballot to every active registered voter, starting around Sept 25" },
  { date: "Nov 3", event: "Vermont General Election", type: "election", note: "Polls open 7 AM – 7 PM. Same-day registration at the polls." },
];

const primaryRaces = [
  "Governor of Vermont",
  "Lieutenant Governor",
  "Attorney General",
  "Secretary of State",
  "State Treasurer",
  "Auditor of Accounts (open seat)",
  "U.S. House (At-Large)",
  "VT State Senate — Chittenden SE (3 seats)",
  "VT House — South Burlington districts",
];

const generalAdditions = [
  "Proposal 3: Right to Collective Bargaining",
  "Proposal 4: Equal Protection of Law",
];

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
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              South Burlington
              <span className="block text-cream-200">Voter Guide 2026</span>
            </h1>
            <p className="text-cream-100 text-lg sm:text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
              Everything South Burlington residents need for the 2026 elections. First up: the open primary on August 11.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 text-cream-100">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPinIcon />
                <span className="font-medium">South Burlington, VT</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CalendarIcon />
                <span className="font-medium">Primary Aug 11 &bull; General Nov 3</span>
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

        {/* Primary Main Event — countdown + early voting + the two facts people get wrong */}
        <section className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl p-6 sm:p-8 mb-8 text-white shadow-soft animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <PrimaryCountdown />
            </div>
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full uppercase tracking-wide mb-2">
                Now Live &bull; Early voting is open
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-1">The August 11 primary is next</h2>
              <p className="text-sage-50 text-sm sm:text-base leading-relaxed">
                Early voting is open now, and Vermont has same-day registration — so there&apos;s no deadline to register. But the primary comes with two catches most people miss.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-display font-bold mb-1 flex items-center gap-2">
                <span aria-hidden="true">📬</span> Nobody mails you a primary ballot
              </p>
              <p className="text-sage-50 text-sm leading-relaxed">
                For the primary you have to <strong>request</strong> one — by <strong>Monday, Aug 10</strong> at the City Clerk&apos;s office (or just vote in person on Aug 11). November is the opposite: a general-election ballot goes to <strong>every</strong> active registered voter automatically.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="font-display font-bold mb-1 flex items-center gap-2">
                <span aria-hidden="true">🗳️</span> You get all three ballots — vote ONE
              </p>
              <p className="text-sage-50 text-sm leading-relaxed">
                Vermont&apos;s primary is open: there&apos;s no party registration here. You&apos;ll get all three major-party ballots — Democratic, Republican, and Progressive. Fill out <strong>one</strong>, and return the other two <strong>blank</strong> in the unvoted-ballots envelope. Skip that step and your vote doesn&apos;t count.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/primary"
              className="inline-flex items-center gap-2 bg-white text-sage-700 hover:bg-cream-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              See who&apos;s running — Primary Guide
              <ArrowRightIcon />
            </Link>
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sage-700/40 hover:bg-sage-700/60 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              Request a Ballot
              <ArrowRightIcon />
            </a>
          </div>
        </section>

        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8 animate-fade-in-delay-1">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🗳️</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">About This Guide</h2>
              <p className="text-warmgray-600 leading-relaxed">
                South Burlington residents will vote in two elections in 2026: the Vermont Primary on August 11 and the General Election on November 3.
                This independent, nonpartisan guide covers all races on those ballots — from Governor down to your local State House representative.
              </p>
              <p className="text-warmgray-500 text-sm mt-2">
                Candidate filing closed May 28, 2026. The full candidate list is now available — see the primary and general guides below.
              </p>
            </div>
          </div>
        </div>

        {/* Candidate Forums (Town Meeting TV) */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 mb-8 border-2 border-sage-200 shadow-soft animate-fade-in-delay-1">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sage-500 to-sage-600 rounded-xl flex items-center justify-center text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-sage-700 uppercase tracking-wide">New Resource</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-warmgray-800 mb-1">Watch the primary candidate forums</h2>
              <p className="text-warmgray-700 text-sm sm:text-base leading-relaxed mb-2">
                See the candidates for the August 11 primary in their own words. New forums are added to the playlist as they&apos;re released.
              </p>
              <p className="text-warmgray-500 text-xs leading-relaxed mb-4">
                Video is courtesy of <a href="https://www.cctv.org" target="_blank" rel="noopener noreferrer" className="text-sage-700 hover:text-sage-900 underline">Town Meeting TV</a>. Town Meeting TV is Chittenden County&apos;s regional government access TV channel.
              </p>
              <a
                href="https://www.youtube.com/playlist?list=PLljLFn4BZd2NCRWbtgzlAg2eWL7886b3J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
              >
                Watch on YouTube
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Same-Day Registration Banner */}
        <div className="bg-gradient-to-r from-sage-50 to-terracotta-50 border border-sage-200 rounded-2xl p-5 sm:p-6 mb-8 animate-fade-in-delay-1">
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
            <span className="text-xs text-warmgray-400 font-medium">Updated July 21, 2026</span>
          </div>
          <ul className="space-y-2 text-sm text-warmgray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Early voting is open</strong> for the August 11 primary — request an absentee ballot at <a href="https://mvp.vermont.gov/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">mvp.vermont.gov</a>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Democratic gubernatorial primary is a two-way race</strong> between Amanda Janoo and Aly Richards. Jeffery Wilson announced in April but did not file.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Treasurer:</strong> incumbent Mike Pieciak (D) is unopposed in the Democratic primary. H. Brooke Paige (R) and Zachary Hampl (P) are on the primary ballot and would face Pieciak in November.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Auditor:</strong> open seat — Doug Hoffer is retiring. The Democratic primary is a three-way race between Tim Ashe, Nick Graeter, and Dan Towle; H. Brooke Paige is the lone Republican.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Governor November ballot confirmed:</strong> Gov. Scott (R), the Democratic primary winner, and Dean Roy (Freedom and Unity Party, 14-year-old Stowe student) will all appear.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>Chittenden-SE Senate:</strong> five-way Democratic primary confirmed — incumbents Chittenden, Lyons, and Ram Hinsdale vs. challengers Grossman and Hunt for 3 nominations. The Republican primary is a two-way race between Javen Sears and Bruce Roy.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-500 flex-shrink-0" />
              <span><strong>South Burlington State House:</strong> all five Democratic incumbents (LaLonde, Burkhardt, Krasnow, Nugent, Minier) are unopposed in the Democratic primary; Republican Mitchel Cypes is on the ballot in Chittenden-8. As of July 21, 2026, independents can still file for the November ballot until August 6.</span>
            </li>
          </ul>
        </div>

        {/* Key Dates Timeline */}
        <div className="mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">Key Dates</h2>
          <div className="bg-white rounded-2xl shadow-soft p-6">
            <ol className="relative border-l-2 border-warmgray-100 ml-3 space-y-5">
              {keyDates.map((item, i) => {
                const dot =
                  item.type === 'election'  ? 'bg-sage-500' :
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
                    <p className="text-warmgray-700 text-sm mt-0.5">{item.event}</p>
                    {item.note && <p className="text-warmgray-500 text-xs mt-1">{item.note}</p>}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Primary Guide Card — the main event, full width */}
        <Link href="/primary" className="group block mb-8 animate-fade-in-delay-2">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden border-2 border-transparent group-hover:border-sage-300 transition-all">
            <div className="bg-gradient-to-br from-sage-500 to-sage-600 p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                    August 11, 2026 &bull; Up next
                  </span>
                  <h2 className="font-display text-2xl font-bold">Vermont Primary Guide</h2>
                  <p className="text-sage-100 text-sm mt-1">Every race on your primary ballot — and who&apos;s running for it</p>
                </div>
                <div className="bg-white/20 rounded-xl p-3 group-hover:bg-white/30 transition-colors">
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-warmgray-500 text-xs font-semibold uppercase tracking-wide mb-3">Races on the ballot</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {primaryRaces.map((race, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-warmgray-700">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    {race}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-warmgray-100">
                <p className="text-xs text-warmgray-400">Filing closed May 28 &bull; Full candidate list inside</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Open Primary Explainer */}
        <div className="bg-gradient-to-r from-sage-50 to-cream-100 border border-sage-100 rounded-2xl p-5 sm:p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center">
              <span className="text-xl">🗳️</span>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-warmgray-800 mb-1">How Vermont&apos;s open primary works</h3>
              <p className="text-warmgray-700 text-sm leading-relaxed">
                No party registration required. You&apos;ll get all three major-party ballots — Democratic, Republican, and Progressive — but you can only vote <strong>one</strong>. Return the other two <strong>blank</strong> in the unvoted-ballots envelope, or your vote won&apos;t count. Choosing one party in August doesn&apos;t lock you in; you can pick a different one in November.
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
                <p className="text-xs text-warmgray-500">Same-day registration available — no deadline</p>
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
                <p className="text-xs text-warmgray-500">SB spans multiple House districts</p>
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
                <p className="font-medium text-warmgray-800 text-sm">Absentee Ballots</p>
                <p className="text-xs text-warmgray-500">Aug 11 primary: request one (not mailed automatically). Nov 3 general: mailed to every active voter.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Looking ahead to November — de-emphasized until after the primary */}
        <section className="mb-8">
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="font-display text-lg font-bold text-warmgray-500">Looking ahead to November</h2>
            <span className="text-xs text-warmgray-400">— after Aug 11</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">

            {/* General Election (muted) */}
            <Link href="/general" className="group block">
              <div className="bg-white rounded-2xl border border-warmgray-200 p-5 h-full hover:border-terracotta-300 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="inline-block bg-warmgray-100 text-warmgray-500 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                      November 3, 2026
                    </span>
                    <h3 className="font-display text-lg font-bold text-warmgray-700">General Election</h3>
                  </div>
                  <span className="text-warmgray-300 group-hover:text-terracotta-400 transition-colors">
                    <ArrowRightIcon />
                  </span>
                </div>
                <p className="text-warmgray-500 text-sm leading-relaxed">
                  Every race from the primary, plus the statewide ballot measures — and a ballot mailed to every active voter automatically. We&apos;ll turn the spotlight here once the primary&apos;s done.
                </p>
                <ul className="mt-3 space-y-1">
                  {generalAdditions.map((item, i) => (
                    <li key={i} className="text-xs text-warmgray-500 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-terracotta-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>

            {/* Leadership 2027 (moved down, muted) */}
            <div className="bg-white rounded-2xl border border-warmgray-200 p-5">
              <span className="inline-block bg-warmgray-100 text-warmgray-500 text-xs font-semibold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                Looking ahead to 2027
              </span>
              <h3 className="font-display text-base font-bold text-warmgray-700 mb-1">New leadership coming to Montpelier</h3>
              <p className="text-warmgray-500 text-sm leading-relaxed">
                Both House Speaker <strong>Jill Krowinski</strong> (D-Burlington) and Senate President Pro Tem <strong>Phil Baruth</strong> (D/P-Chittenden Central) aren&apos;t seeking reelection — so both chambers get new leaders in the 2027 session, the first open contest for both top posts in years.
              </p>
            </div>
          </div>
        </section>

        {/* Archive Notice */}
        <div className="bg-warmgray-50 border border-warmgray-200 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-warmgray-200 rounded-xl flex items-center justify-center text-warmgray-600 flex-shrink-0">
              <ArchiveIcon />
            </div>
            <div>
              <p className="font-display font-semibold text-warmgray-700">March 2026 Town Meeting Day Results</p>
              <p className="text-warmgray-500 text-sm">Beth Zigmund elected to City Council &bull; All ballot articles passed</p>
            </div>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 text-sm font-medium text-warmgray-600 hover:text-warmgray-800 bg-white border border-warmgray-200 hover:border-warmgray-300 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
          >
            View Results
            <ArrowRightIcon />
          </Link>
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
            <p className="text-xs text-warmgray-400 mb-4">
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
