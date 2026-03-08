import Link from 'next/link';

interface NavProps {
  electionSlug: string;
  electionName: string;
  currentPage?: string;
}

export default function Nav({ electionSlug, electionName, currentPage }: NavProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/75 mb-4 flex-wrap">
      <Link href="/" className="hover:text-white transition-colors font-medium">
        Election Guide
      </Link>
      <svg className="w-3 h-3 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <Link href={`/elections/${electionSlug}`} className="hover:text-white transition-colors">
        {electionName}
      </Link>
      {currentPage && (
        <>
          <svg className="w-3 h-3 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white/90">{currentPage}</span>
        </>
      )}
    </div>
  );
}
