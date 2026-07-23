import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Vote | South Burlington Voter Guide 2026",
  description:
    "Everything you need to know about voting in South Burlington, VT — same-day registration, ID requirements, mail ballots, polling locations, and more.",
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
      "No. Vermont has same-day voter registration. You can register and vote on the same day — even at your polling place on Election Day. There is no registration deadline. You can also register or update your registration online at mvp.vermont.gov up to the day before the election.",
  },
  {
    question: "What do I need to bring to register at the polls?",
    answer:
      "To register at the polls on Election Day, you need to provide your name, date of birth, and a Vermont residence address. You will sign an oath affirming your identity and eligibility. You do not need a photo ID to register.",
  },
  {
    question: "Do I need a photo ID to vote in Vermont?",
    answer:
      "No. Vermont does not require a photo ID to vote. When you check in at the polls, a poll worker will ask for your name and verify it against the checklist. If you are not on the checklist, you can register on the spot (see above).",
  },
  {
    question: "Will I get a ballot in the mail?",
    answer:
      "For the General Election (November 3), yes — Vermont automatically mails ballots to all active registered voters. You can vote by mail, drop your ballot at a drop box, or vote in person at your polling place. For the Primary (August 11), you can request an absentee ballot through My Voter Page (mvp.vermont.gov) or vote in person.",
  },
  {
    question: "How do I vote by mail?",
    answer:
      "When you receive your ballot in the mail, mark it, seal it in the provided envelope, sign the envelope, and either mail it back (postage is pre-paid) or drop it at a designated drop box or your Town Clerk's office. Your ballot must be received by 7:00 PM on Election Day.",
  },
  {
    question: "I moved within South Burlington. Do I need to re-register?",
    answer:
      "Yes — you should update your address so you receive the correct ballot for your district. You can update your address online at mvp.vermont.gov or at your polling place on Election Day. South Burlington spans multiple Vermont House districts, so your address determines which State House race appears on your ballot.",
  },
  {
    question: "I just moved to South Burlington. Can I vote here?",
    answer:
      "Yes, if South Burlington is your primary residence. You can register at your new polling place on Election Day with same-day registration. Update your address at mvp.vermont.gov or register in person.",
  },
  {
    question: "Where do I vote in South Burlington?",
    answer:
      "South Burlington has four polling locations: Chamberlin School (White Street), Frederick H. Tuttle Middle School (Dorset Street), Orchard School (Baldwin Avenue), and Kevin Dorn Senior Center at City Hall (Market Street). Your assigned location depends on your address. Check mvp.vermont.gov to find your polling place.",
  },
  {
    question: "What are the polling hours?",
    answer:
      "Polls are open from 7:00 AM to 7:00 PM on Election Day. If you are in line by 7:00 PM, you will be allowed to vote.",
  },
  {
    question: "How does the primary work? Do I pick a party?",
    answer:
      "Vermont has open primaries. When you arrive at the polls, you choose which party's ballot you want — you do not have to be registered with that party. You can only vote in one party's primary. Your choice does not affect your voter registration or party affiliation.",
  },
  {
    question: "Why does the guide say some races have no opponent “as of” a date?",
    answer:
      "Because the ballot isn't fully set the moment major-party filing closes. Major-party candidates had to file by May 28, but independent candidates have until August 6, 2026 to qualify for the November ballot, and party committees can fill a spot left empty in the primary until August 17. So when we say a race has no opponent “as of” a certain date, that's a snapshot in time — it can still change, and we update the guide when it does.",
  },
  {
    question: "Can I drop my ballot off instead of mailing it?",
    answer:
      "Yes. You can return your ballot by mail, in person at the Clerk's Office, or in one of the 24/7 drop boxes near the main and back entrances of City Hall (180 Market Street). Early in-person voting at the Clerk's Office ends at noon the day before the election — so for the August 11 primary, that's noon on Monday, August 10.",
  },
  {
    question: "How do I reach the South Burlington City Clerk?",
    answer:
      "The City Clerk's Office is at 180 Market Street and is open Monday through Friday, 8:00 AM to 4:30 PM. You can call them at 802-846-4105 with any questions about your ballot, registration, or where to vote.",
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
              Registration, ID requirements, mail ballots, and everything else
              South Burlington voters need to know.
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
                Vermont Has Same-Day Voter Registration
              </h2>
              <p className="text-warmgray-700 text-sm leading-relaxed mb-2">
                There is no registration deadline in Vermont. You can register and vote on the same day — including at your polling place on Election Day. This applies to both the Primary (August 11) and the General Election (November 3).
              </p>
              <p className="text-warmgray-600 text-sm leading-relaxed">
                You can also register or update your registration online at{" "}
                <a
                  href="https://mvp.vermont.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-600 hover:text-sage-800 font-medium transition-colors"
                >
                  mvp.vermont.gov
                  <ExternalLinkIcon />
                </a>{" "}
                up to the day before the election.
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
              { label: "Registration deadline", value: "None — same-day registration" },
              { label: "Photo ID required", value: "No" },
              { label: "Primary (open)", value: "August 11, 2026" },
              { label: "General Election", value: "November 3, 2026" },
              { label: "Polling hours", value: "7:00 AM – 7:00 PM" },
              { label: "Mail ballots (general)", value: "Sent automatically to all voters" },
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
            Your assigned location depends on your address.{" "}
            <a
              href="https://mvp.vermont.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 hover:text-sage-800 font-medium transition-colors"
            >
              Find yours at mvp.vermont.gov
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
              { name: "My Voter Page", desc: "Register, find your polling place, request a ballot", url: "https://mvp.vermont.gov/" },
              { name: "VT Secretary of State — Elections", desc: "Official election information", url: "https://sos.vermont.gov/elections/" },
              { name: "SB City Clerk — Elections", desc: "Local election details", url: "https://www.southburlingtonvt.gov/departments/city_clerk/elections_and_voting.php" },
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
