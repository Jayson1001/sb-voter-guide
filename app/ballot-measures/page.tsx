import Link from "next/link";
import ballotMeasuresData from "@/data/ballot-measures.json";

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

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function BallotMeasuresPage() {
  const measures = ballotMeasuresData.measures;

  return (
    <main className="min-h-screen bg-pattern">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Link href="/general" className="inline-flex items-center gap-2 text-sage-100 hover:text-white mb-5 transition-colors text-sm">
            <ArrowLeftIcon />
            Back to General Election Guide
          </Link>

          <div>
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              November 3, 2026 Ballot
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Ballot Measures</h1>
            <p className="text-sage-100 text-base sm:text-lg max-w-2xl">
              Two proposed amendments to the Vermont Constitution — both referred by the legislature with overwhelming bipartisan support.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0Z" fill="#FDF9F3"/>
          </svg>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* How Constitutional Amendments Work */}
        <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8 mb-8">
          <h2 className="font-display text-xl font-bold text-warmgray-800 mb-3">How Vermont Constitutional Amendments Work</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-warmgray-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-bold text-sm flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-0.5">Legislature (first session)</p>
                <p>Both the House and Senate must pass the amendment. Both measures passed with near-unanimous votes in 2023–24.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-bold text-sm flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-0.5">Legislature (second session)</p>
                <p>After an intervening election, the new legislature must pass the amendment again. Both measures are completing this step in 2025–26.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-700 font-bold text-sm flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-warmgray-700 mb-0.5">Voter ratification</p>
                <p>Vermont voters vote Yes or No on November 3, 2026. A simple majority approves it — and it becomes part of the Vermont Constitution permanently.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-warmgray-400 mt-4 pt-4 border-t border-warmgray-100">
            Note: Vermont citizens cannot initiate constitutional amendments themselves — all amendments must be referred by the legislature through this two-session process.
          </p>
        </div>

        {/* Each measure */}
        {measures.map((measure, measureIdx) => (
          <div key={measure.id} className="mb-10">
            {/* Measure Header */}
            <div className={`rounded-2xl overflow-hidden shadow-soft mb-5`}>
              <div className={`px-6 py-6 ${measureIdx === 0 ? 'bg-gradient-to-br from-sage-500 to-sage-700' : 'bg-gradient-to-br from-terracotta-500 to-terracotta-700'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {measure.number} &bull; {measure.type}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{measure.title}</h2>
                    <p className="text-white/80 text-base">{measure.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full ${
                      measure.status === 'confirmed'
                        ? 'bg-white/20 text-white'
                        : 'bg-white/15 text-white/90'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {measure.status === 'confirmed' ? 'Confirmed for Nov ballot' : 'On track for Nov ballot'}
                    </span>
                    {measure.statusNote && measure.status !== 'confirmed' && (
                      <p className="text-white/70 text-xs mt-1 text-right">{measure.statusNote}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Plain language */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h3 className="font-display text-lg font-bold text-warmgray-800 mb-3">What it says — plain language</h3>
                <p className="text-warmgray-600 leading-relaxed">{measure.plainLanguageSummary}</p>

                <div className="mt-4 bg-warmgray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-2">Proposed Constitutional Text</p>
                  <p className="text-warmgray-700 text-sm italic leading-relaxed">&ldquo;{measure.proposedConstitutionalText}&rdquo;</p>
                </div>

                {/* Protected characteristics for PR.4 */}
                {(measure as any).protectedCharacteristics && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-2">Nine Protected Characteristics</p>
                    <div className="flex flex-wrap gap-2">
                      {(measure as any).protectedCharacteristics.map((char: string) => (
                        <span key={char} className="text-xs bg-sage-50 text-sage-700 border border-sage-100 px-2.5 py-1 rounded-full">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* What it does / does not */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-display text-base font-bold text-warmgray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 flex-shrink-0">
                      <CheckIcon />
                    </span>
                    What it does
                  </h3>
                  <ul className="space-y-2.5">
                    {measure.whatItDoes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-warmgray-600">
                        <span className="mt-0.5 w-4 h-4 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-display text-base font-bold text-warmgray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-warmgray-100 rounded-full flex items-center justify-center text-warmgray-500 flex-shrink-0">
                      <XIcon />
                    </span>
                    What it does <em>not</em> do
                  </h3>
                  <ul className="space-y-2.5">
                    {measure.whatItDoesNot.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-warmgray-600">
                        <span className="mt-0.5 w-4 h-4 bg-warmgray-100 rounded-full flex items-center justify-center text-warmgray-400 flex-shrink-0">
                          <XIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arguments */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-display text-base font-bold text-sage-700 mb-3">Arguments for</h3>
                  <ul className="space-y-3">
                    {measure.arguments.for.map((arg, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-warmgray-600">
                        <span className="mt-1 w-4 h-4 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        {arg}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="font-display text-base font-bold text-terracotta-700 mb-3">Arguments against</h3>
                  <ul className="space-y-3">
                    {measure.arguments.against.map((arg, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-warmgray-600">
                        <span className="mt-1 w-4 h-4 bg-terracotta-50 rounded-full flex items-center justify-center text-terracotta-500 flex-shrink-0">
                          <XIcon />
                        </span>
                        {arg}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legislative history */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h3 className="font-display text-base font-bold text-warmgray-800 mb-4">Legislative History</h3>
                <div className="space-y-3">
                  {measure.legislativeHistory.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${measureIdx === 0 ? 'bg-sage-400' : 'bg-terracotta-400'}`} />
                      <div>
                        <span className={`text-xs font-semibold ${measureIdx === 0 ? 'text-sage-600' : 'text-terracotta-600'}`}>
                          {item.date}
                        </span>
                        <p className="text-warmgray-700 text-sm">{item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Context */}
                <div className="mt-4 pt-4 border-t border-warmgray-100">
                  <p className="text-warmgray-600 text-sm leading-relaxed">{measure.context}</p>
                </div>
              </div>

              {/* Sources */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <h3 className="font-display text-base font-bold text-warmgray-800 mb-3">Sources</h3>
                <ul className="space-y-2">
                  {measure.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage-600 hover:text-sage-800 text-sm hover:underline transition-colors"
                      >
                        {source.title}
                        <ExternalLinkIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* Nav */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/general"
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-warmgray-200 hover:border-sage-300 text-warmgray-700 hover:text-sage-700 px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            <ArrowLeftIcon />
            Back to General Election Guide
          </Link>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 bg-sage-500 hover:bg-sage-600 text-white px-5 py-3 rounded-xl font-medium text-sm transition-colors"
          >
            Back to Voter Guide Home
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </main>
  );
}
