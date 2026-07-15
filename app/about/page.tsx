import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | South Burlington Voter Guide 2026",
  description:
    "Learn about the author behind sbvoterguide.com — an independent, nonpartisan community resource for South Burlington, VT voters.",
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

const MailIcon = () => (
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
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MessageIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

export default function AboutPage() {
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
              About This Guide
            </h1>
            <p className="text-sage-100 text-lg max-w-2xl leading-relaxed">
              Who&apos;s behind sbvoterguide.com, and why it exists.
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
        {/* About the Author */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 flex-shrink-0">
              <UserIcon />
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">
              About the Author
            </h2>
          </div>

          <div className="space-y-4 text-warmgray-700 text-sm leading-relaxed">
            <p>
              Hi — I&apos;m{" "}
              <strong className="text-warmgray-800">Jayson Durante</strong>, a
              South Burlington resident, and I built this voter guide.
            </p>
            <p>
              Every election I&apos;d go looking for straight answers about who
              was running and what was actually on the ballot — and come up
              short. Local races and ballot measures get the least coverage, and
              they&apos;re the ones that land closest to home.
            </p>
            <p>
              I build websites for a living. So I built one: independent,
              nonpartisan, and organized — official sources, candidate
              information, and key dates in one place, so my neighbors and I can
              walk into the voting booth feeling confident and prepared.
            </p>

            <div className="bg-sage-50 border border-sage-100 rounded-xl p-4 mt-5">
              <p className="text-warmgray-600 text-sm">
                <strong className="text-warmgray-700">
                  This is a community project
                </strong>{" "}
                — not a political campaign, advocacy organization, or government
                website. I&apos;m not affiliated with the City of South
                Burlington, any political party, or any candidate. My goal is
                simply to help my neighbors make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Feedback */}
        <section className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-6 animate-fade-in-delay-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-terracotta-100 rounded-xl flex items-center justify-center text-terracotta-600 flex-shrink-0">
              <MessageIcon />
            </div>
            <h2 className="font-display text-xl font-bold text-warmgray-800">
              Contact & Feedback
            </h2>
          </div>

          <div className="space-y-4 text-warmgray-700 text-sm leading-relaxed">
            <p>
              This guide is a living resource — your feedback helps me keep it
              accurate and useful. If you spot an error, have a suggestion, or
              want to share information about a candidate or race, please reach
              out.
            </p>

            <a
              href="mailto:jayson@durantedevelopment.com"
              className="inline-flex items-center gap-3 p-4 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors group"
            >
              <div className="w-10 h-10 bg-sage-100 group-hover:bg-sage-200 rounded-lg flex items-center justify-center text-sage-600 flex-shrink-0 transition-colors">
                <MailIcon />
              </div>
              <div>
                <p className="font-medium text-warmgray-800 text-sm">
                  Send an Email
                </p>
                <p className="text-xs text-warmgray-500">
                  jayson@durantedevelopment.com
                </p>
              </div>
            </a>

            <p className="text-warmgray-500 text-xs">
              Corrections, candidate information, missing sources, accessibility
              feedback — all welcome.
            </p>
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
