import { debatesFor, kindLabel, shortDate } from "@/lib/debates";

const PlayIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.14v13.72a1 1 0 001.5.86l10.5-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
  </svg>
);

/**
 * "Watch the candidates" block for a race card or ballot measure: every
 * recorded debate, forum or interview we have a link for, newest first.
 * Renders nothing when there are none.
 */
export default function WatchLinks({ id, heading = "Watch the candidates" }: { id: string; heading?: string }) {
  const items = debatesFor(id);
  if (items.length === 0) return null;
  return (
    <div className="bg-sage-50 border border-sage-100 rounded-xl p-3 mb-3">
      <p className="text-xs font-semibold text-sage-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
        <PlayIcon />
        {heading}
      </p>
      <ul className="space-y-2">
        {items.map((e) => (
          <li key={e.url} className="text-sm leading-snug">
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sage-700 hover:text-sage-900 underline decoration-sage-300 hover:decoration-sage-700"
            >
              {e.title}
            </a>
            <span className="text-warmgray-600 text-xs">
              {" "}· {kindLabel[e.kind]} · {e.host} · {shortDate(e.date)}
            </span>
            <p className="text-xs text-warmgray-600 mt-0.5">
              {e.participants.replace(/\.$/, "")}. {e.format}.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
