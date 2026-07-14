import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Vote | South Burlington Voter Guide 2026",
  description:
    "Everything you need to know about voting in South Burlington, VT — a plain-English guide to same-day registration, ID rules, mail ballots, and polling places.",
};

const ArrowLeftIcon = () => (
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
);

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 inline-block ml-1 opacity-50"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const faqs = [
  {
    question: "Do I need to register before Election Day?",
    answer:
      "Nope. You can register and vote on the same day — including right at your polling place on Election Day. There's no deadline. If you'd rather do it ahead of time, mvp.vermont.gov takes online registration up until the day before the election.",
  },
  {
    question: "What do I need to bring to register at the polls?",
    answer:
      "Your name, date of birth, and a Vermont residence address. You'll sign a short oath saying yes, you're who you say you are and you're eligible to vote. No photo ID needed.",
  },
  {
    question: "Do I need a photo ID to vote in Vermont?",
    answer:
      "No. Vermont doesn't require a photo ID. At the polls, a poll worker asks your name and finds you on the voter list. Not on the list? Register right there — see question 1.",
  },
  {
    question: "Will I get a ballot in the mail?",
    answer:
      "For the General Election on November 3, yes — Vermont automatically mails a ballot to every active registered voter. You can mail it back, drop it in a drop box, or vote in person instead. For the Primary on August 11, ballots aren't auto-mailed. You request one at mvp.vermont.gov, or you show up in person.",
  },
  {
    question: "How do I vote by mail?",
    answer:
      "Mark your ballot, put it in the sealed envelope that came with it, and sign the envelope (this part is easy to forget — do not forget). Mail it back (postage is pre-paid), drop it at a drop box, or hand it to the Town Clerk's office. It has to be received by 7:00 PM on Election Day — not postmarked, received.",
  },
  {
    question: "I moved within South Burlington. Do I need to re-register?",
    answer:
      "Yes — otherwise you might get the wrong ballot. Update your address at mvp.vermont.gov, or fix it at your polling place on Election Day. South Burlington is chopped into several State House districts, and your address decides which one shows up on your ballot.",
  },
  {
    question: "I just moved to South Burlington. Can I vote here?",
    answer:
      "Yes, as long as South Burlington is where you actually live. You can register at your new polling place on Election Day. Or update your address at mvp.vermont.gov ahead of time.",
  },
  {
    question: "Where do I vote in South Burlington?",
    answer:
      "South Burlington has four polling locations: Chamberlin School (White Street), Frederick H. Tuttle Middle School (Dorset Street), Orchard School (Baldwin Avenue), and Kevin Dorn Senior Center at City Hall (Market Street). Which one is yours depends on your address — mvp.vermont.gov will tell you.",
  },
  {
    question: "What are the polling hours?",
    answer:
      "7:00 AM to 7:00 PM on Election Day. If you're in line at 7:00 PM, you still get to vote — they can't kick you out.",
  },
  {
    question: "How does the primary work? Do I pick a party?",
    answer:
      "Vermont's primary is open — meaning you don't need to belong to a party to vote in it. When you show up (or when you request a mail ballot), you pick one party's ballot and vote only in that party's races. Your pick doesn't sign you up for anything: you can grab a different party's ballot in November.",
  },
];

const pollingLocations = [
  "Chamberlin School (White Street)",
  "Frederick H. Tuttle Middle School (Dorset Street)",
  "Orchard School (Baldwin Avenue)",
  "Kevin Dorn Senior Center at City Hall (Market Street)",
];

export default function HowToVotePage() {
  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-terracotta-300/30 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sage-100 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeftIcon />
            Back to Guide
          </Link>
          <div className="animate-fade-in">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              How to Vote
            </h1>
            <p className="text-sage-100 text-lg max-w-2xl leading-relaxed">
              Registration, IDs, mail ballots, polling places — the un-boring version.
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-6">
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 48"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 48h1440V24C1200 0 960 48 720 24S240 48 0 24v24z"
              className="fill-cream-100"
            />
          </svg>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-1">

        {/* Same-Day Registration Highlight */}
        <section className="bg-gradient-to-r from-sage-50 to-terracotta-50 border border-sage-200 rounded-2xl p-6 sm:p-8 mb-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-sage-800 mb-2">
                You Can Sign Up on Election Day
              </h2>
              <p className="text-warmgray-700 text-sm leading-relaxed mb-2">
                Vermont has no registration deadline. Show up at the polls, register on the spot, vote — same visit, one and done. Works for both the Primary (<strong>August 11</strong>) and the General Election (<strong>November 3</strong>).
              </p>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                Prefer to knock it out ahead of time? Register or update your registration online at{" "}
                <a
                  href="https://mvp.vermont.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 font-medium transition-colors"
                >
                  mvp.vermont.gov
                  <ExternalLinkIcon />
                </a>{" "}
                up to the day before Election Day.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-5">
            Quick Facts
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Registration deadline", value: "None — you can sign up at the polls" },
              { label: "Photo ID required", value: "No" },
              { label: "Primary (open)", value: "August 11, 2026" },
              { label: "General Election", value: "November 3, 2026" },
              { label: "Polling hours", value: "7:00 AM – 7:00 PM" },
              { label: "Mail ballots (general)", value: "Sent to every active voter automatically" },
            ].map((fact, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-cream-50">
                <div className="w-2 h-2 mt-1.5 bg-sage-400 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-warmgray-500 text-xs font-semibold uppercase tracking-wide">{fact.label}</p>
                  <p className="text-warmgray-800 text-sm font-medium">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Polling Locations */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-2">
            South Burlington Polling Locations
          </h2>
          <p className="text-warmgray-500 text-sm mb-4">
            Which one you use depends on your address.{" "}
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 hover:text-sage-800 font-medium transition-colors"
            >
              Look it up at mvp.vermont.gov
              <ExternalLinkIcon />
            </a>
          </p>
          <ul className="space-y-2">
            {pollingLocations.map((loc, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-warmgray-700">
                <div className="w-8 h-8 bg-sage-100 text-sage-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {loc}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-6 animate-fade-in">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-soft p-5 sm:p-6">
                <h3 className="font-display font-bold text-warmgray-800 text-sm mb-2">
                  {faq.question}
                </h3>
                <p className="text-warmgray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Official Resources */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-4">
            Official Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "My Voter Page", desc: "Register, find your polling place, request a mail ballot", url: "https://mvp.vermont.gov/" },
              { name: "VT Secretary of State — Elections", desc: "The state's official election page", url: "https://sos.vermont.gov/elections/" },
              { name: "SB City Clerk — Elections", desc: "South Burlington's own election info", url: "https://www.southburlingtonvt.gov/departments/city_clerk/elections_and_voting.php" },
            ].map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
              >
                <div className="w-9 h-9 bg-sage-100 rounded-lg flex items-center justify-center text-sage-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-warmgray-800 text-sm">{resource.name}</p>
                  <p className="text-xs text-warmgray-500">{resource.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-warmgray-600 hover:text-warmgray-800 border border-warmgray-200 hover:border-warmgray-300 px-5 py-2.5 rounded-lg transition-colors"
          >
            <ArrowLeftIcon />
            Back to Guide
          </Link>
          <Link
            href="/sources"
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-sage-500 hover:bg-sage-600 px-5 py-2.5 rounded-lg transition-colors"
          >
            Sources & Citations
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Page footer */}
        <div className="mt-8 pt-6 border-t border-warmgray-200 text-center">
          <p className="text-warmgray-400 text-xs">
            sbvoterguide.com &middot; An independent community resource for
            South Burlington, VT
          </p>
        </div>
      </div>
    </main>
  );
}
