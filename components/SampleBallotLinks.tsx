import ballotMeasuresData from "@/data/ballot-measures.json";

// Links to the City's official Nov 3 sample ballots, one per House district.
// Used wherever we point people to the exact ballot wording instead of
// retyping it (Proposals 3 & 4, race lists, the cheat sheet).
export default function SampleBallotLinks({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      {ballotMeasuresData.sampleBallots.map((b, i) => (
        <span key={b.district}>
          {i > 0 && " · "}
          <a
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-700 hover:text-sage-900 underline whitespace-nowrap"
          >
            {b.district}
          </a>
        </span>
      ))}
    </span>
  );
}
