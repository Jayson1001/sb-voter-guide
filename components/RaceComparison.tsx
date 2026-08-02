import comparisons from "@/data/comparisons.json";

// "What's the difference?" — a neutral, sourced side-by-side for a CONTESTED
// race. Content lives in data/comparisons.json (keyed by race id). Renders
// nothing if there's no comparison for the race, so it's safe to drop under
// any race. Nonpartisan by construction: every candidate column is styled
// identically, in a fixed order, with no scoring, ranking, or directional
// language. A missing answer renders as "Did not respond," which is
// information, not a gap.

type Source = { label: string; url: string };
type Row = {
  axis: string;
  detail?: string;
  values: Record<string, string>;
  source?: Source;
};
type Comparison = {
  raceId: string;
  office?: string;
  asOf?: string;
  intro: string;
  candidates: string[];
  rows: Row[];
  agree?: string;
  sources?: Source[];
};

const data = comparisons as unknown as Record<string, Comparison>;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Format a fixed "YYYY-MM-DD" without constructing a Date (avoids timezone drift).
function fmtDate(iso?: string): string | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

const ExternalLinkIcon = () => (
  <svg className="w-3 h-3 inline-block ml-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

function SourceLink({ source }: { source: Source }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-xs text-sage-600 hover:text-sage-800 underline underline-offset-2"
    >
      Source: {source.label}
      <ExternalLinkIcon />
    </a>
  );
}

export default function RaceComparison({ raceId }: { raceId: string }) {
  const c = data[raceId];
  if (!c || !c.candidates?.length || !c.rows?.length) return null;

  const asOf = fmtDate(c.asOf);

  return (
    <section className="bg-white rounded-2xl shadow-soft border-2 border-sage-200 overflow-hidden mt-4 mb-8">
      {/* Header */}
      <div className="bg-sage-50 border-b border-sage-100 px-5 sm:px-6 py-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-sage-800">What&apos;s the difference?</h3>
          {asOf && <span className="text-xs text-warmgray-400">As of {asOf}</span>}
        </div>
        <p className="text-warmgray-600 text-sm leading-relaxed mt-1">{c.intro}</p>
      </div>

      <div className="p-5 sm:p-6">
        {/* Desktop: table */}
        <table className="hidden sm:table w-full border-collapse">
          <thead>
            <tr>
              <th className="w-40 text-left align-bottom pb-3 pr-4"></th>
              {c.candidates.map((name) => (
                <th
                  key={name}
                  scope="col"
                  className="text-left align-bottom pb-3 px-4 font-display text-base font-bold text-warmgray-800"
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row, i) => (
              <tr key={i} className="border-t border-warmgray-100 align-top">
                <th scope="row" className="text-left py-4 pr-4">
                  <span className="block text-sm font-semibold text-warmgray-800">{row.axis}</span>
                  {row.detail && (
                    <span className="block text-xs text-warmgray-400 font-normal mt-0.5 leading-relaxed">
                      {row.detail}
                    </span>
                  )}
                  {row.source && (
                    <span className="block mt-1.5">
                      <SourceLink source={row.source} />
                    </span>
                  )}
                </th>
                {c.candidates.map((name) => (
                  <td key={name} className="py-4 px-4 text-sm text-warmgray-700 leading-relaxed">
                    {row.values[name] ? (
                      row.values[name]
                    ) : (
                      <span className="text-warmgray-400 italic">Did not respond</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: stacked cards, one axis per card (no horizontal scroll) */}
        <div className="sm:hidden space-y-4">
          {c.rows.map((row, i) => (
            <div key={i} className="border border-warmgray-100 rounded-xl p-4">
              <p className="text-sm font-semibold text-warmgray-800">{row.axis}</p>
              {row.detail && (
                <p className="text-xs text-warmgray-400 mt-0.5 leading-relaxed">{row.detail}</p>
              )}
              <div className="mt-3 space-y-3">
                {c.candidates.map((name) => (
                  <div key={name}>
                    <p className="text-xs font-semibold text-sage-700">{name}</p>
                    <p className="text-sm text-warmgray-700 leading-relaxed mt-0.5">
                      {row.values[name] ? (
                        row.values[name]
                      ) : (
                        <span className="text-warmgray-400 italic">Did not respond</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              {row.source && (
                <div className="mt-3 pt-2 border-t border-warmgray-100">
                  <SourceLink source={row.source} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Where they agree */}
        {c.agree && (
          <div className="mt-6 bg-cream-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-1.5">Where they agree</p>
            <p className="text-sm text-warmgray-600 leading-relaxed">{c.agree}</p>
          </div>
        )}

        {/* Check it yourself */}
        {c.sources && c.sources.length > 0 && (
          <div className="mt-6 pt-4 border-t border-warmgray-100">
            <p className="text-xs font-semibold text-warmgray-500 uppercase tracking-wide mb-2">Check it yourself</p>
            <ul className="space-y-1.5">
              {c.sources.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sage-600 hover:text-sage-800 underline underline-offset-2"
                  >
                    {s.label}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
