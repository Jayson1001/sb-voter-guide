import officeExplainers from "@/data/office-explainers.json";

// One reusable "what does this job actually do?" aside. Pass the office name
// (matching the `office` field in races.json) and it renders the matching blurb
// from data/office-explainers.json. Edit copy in that one file — not here.
// Renders nothing if there's no blurb for the office, so it's safe to drop above
// any race section.

type Explainer = {
  blurb: string;
  link?: { label: string; href: string };
};

const explainers = officeExplainers as Record<string, Explainer>;

const QuestionIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="w-4 h-4 ml-auto flex-shrink-0 text-sage-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function OfficeExplainer({ office }: { office: string }) {
  const explainer = explainers[office];
  if (!explainer) return null;

  return (
    <details className="group bg-cream-50 border border-sage-100 rounded-xl">
      <summary className="flex items-center gap-2 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden px-4 py-2.5 text-sm font-medium text-sage-800">
        <QuestionIcon />
        What does this job do?
        <ChevronIcon />
      </summary>
      <div className="px-4 pb-3.5 pt-0.5">
        <p className="text-warmgray-600 text-sm leading-relaxed">{explainer.blurb}</p>
        {explainer.link && (
          <a
            href={explainer.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-sage-700 hover:text-sage-900 underline"
          >
            {explainer.link.label}
          </a>
        )}
      </div>
    </details>
  );
}
