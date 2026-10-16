import { partyChipClass, ballotLabelTitle } from "@/lib/raceMeta";
import generalRaces from "@/data/general-races.json";
import OfficeExplainer from "@/components/OfficeExplainer";

// One card per race on the November 3 ballot, driven by data/general-races.json.
// Every candidate gets the exact same card: name, ballot label, town, the
// source of those three facts, and an "About" drawer. The drawer holds a
// carried-over profile when we have one, or says plainly that we don't —
// so a long bio never makes one card bigger than its neighbor's.

type Source = { title: string; url: string };

export type GeneralCandidate = {
  name: string;
  town: string | null;
  ballotLabel: string;
  parties: string[];
  bio?: string;
  notablePositions?: string[];
  website?: string;
};

export type GeneralRace = {
  id: string;
  office: string;
  shortName: string;
  district?: string;
  districtNote?: string;
  seats: number;
  voteFor: number;
  termYears: number;
  openSeat: boolean;
  description?: string;
  voteForNote?: string;
  notes?: string;
  noteSources?: Source[];
  candidates: GeneralCandidate[];
};

const SOS = generalRaces.candidateSource as Source;

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5 inline-block ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const numberWords = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE"];

export function BallotLabelChip({ label }: { label: string }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full border ${partyChipClass(label)}`}
      title={ballotLabelTitle[label]}
    >
      {label}
    </span>
  );
}

export function CandidateCard({ c }: { c: GeneralCandidate }) {
  const hasProfile = !!(c.bio || (c.notablePositions && c.notablePositions.length) || c.website);
  return (
    <li className="p-3 rounded-xl bg-cream-50 border border-warmgray-100">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-medium text-warmgray-800 text-sm">{c.name}</span>
        <BallotLabelChip label={c.ballotLabel} />
      </div>
      {c.town && <p className="text-xs text-warmgray-600 mt-1">Lives in {c.town}</p>}
      <p className="text-[11px] text-warmgray-600 mt-1">
        Source:{" "}
        <a href={SOS.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
          Vermont Secretary of State candidate list
        </a>
      </p>
      <details className="group mt-2">
        <summary className="inline-flex items-center gap-1 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden text-xs font-medium text-sage-700 hover:text-sage-900">
          About this candidate
          <ChevronIcon />
        </summary>
        <div className="mt-2 text-xs text-warmgray-600 leading-relaxed">
          {hasProfile ? (
            <>
              {c.bio && <p>{c.bio}</p>}
              {c.notablePositions && c.notablePositions.length > 0 && (
                <ul className="mt-1.5 space-y-0.5">
                  {c.notablePositions.map((pos) => (
                    <li key={pos} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-warmgray-300 flex-shrink-0" />
                      {pos}
                    </li>
                  ))}
                </ul>
              )}
              {c.website && (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-sage-600 hover:text-sage-800"
                >
                  Website<ExternalLinkIcon />
                </a>
              )}
            </>
          ) : (
            <p>
              We haven&apos;t added a profile for this candidate yet. Name, party label, and town come from the
              Secretary of State&apos;s official candidate list.
            </p>
          )}
        </div>
      </details>
    </li>
  );
}

export default function GeneralRaceCard({ race }: { race: GeneralRace }) {
  const voteFor = numberWords[race.voteFor] ?? String(race.voteFor);
  return (
    <div className={`bg-white rounded-2xl shadow-soft overflow-hidden border-2 ${race.openSeat ? "border-terracotta-200" : "border-transparent"}`}>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {race.district && (
                <span className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide">{race.district}</span>
              )}
              {race.seats > 1 && (
                <span className="text-xs bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full font-medium">{race.seats} seats</span>
              )}
              {race.openSeat && (
                <span className="text-xs bg-terracotta-100 text-terracotta-700 px-2 py-0.5 rounded-full font-semibold">Open Seat</span>
              )}
            </div>
            <h3 className="font-display text-lg font-bold text-warmgray-800">{race.shortName}</h3>
            {race.district && race.office !== race.shortName && <p className="text-warmgray-600 text-sm">{race.office}</p>}
          </div>
          <div className="flex-shrink-0 text-xs text-warmgray-600 text-right">
            <p>{race.termYears}-yr term</p>
            <p className="font-semibold text-warmgray-700 mt-0.5">Vote for {voteFor}</p>
          </div>
        </div>

        {race.description ? (
          <p className="text-warmgray-600 text-sm leading-relaxed mb-4 border-l-2 border-terracotta-200 pl-3">{race.description}</p>
        ) : (
          <div className="mb-4">
            <OfficeExplainer office={race.office} />
          </div>
        )}

        {race.voteForNote && <p className="text-xs text-warmgray-700 bg-cream-50 rounded-lg px-3 py-2 mb-3">{race.voteForNote}</p>}

        <p className="text-xs font-semibold text-warmgray-600 uppercase tracking-wide mb-2">
          On the November ballot ({race.candidates.length} {race.candidates.length === 1 ? "candidate" : "candidates"})
        </p>
        <ul className="space-y-2 mb-3">
          {race.candidates.map((c) => (
            <CandidateCard key={c.name} c={c} />
          ))}
        </ul>

        {race.notes && (
          <p className="text-xs text-warmgray-600 italic border-t border-warmgray-100 pt-3 mt-1">
            {race.notes}
            {race.noteSources && race.noteSources.length > 0 && (
              <span className="not-italic">
                {" "}Source:{" "}
                {race.noteSources.map((s, i) => (
                  <span key={s.url}>
                    {i > 0 && " · "}
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-sage-700">
                      {s.title}
                    </a>
                  </span>
                ))}
              </span>
            )}
          </p>
        )}
        {race.districtNote && (
          <div className="mt-2 flex items-start gap-1.5 text-xs text-warmgray-600">
            <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {race.districtNote}
          </div>
        )}
      </div>
    </div>
  );
}
