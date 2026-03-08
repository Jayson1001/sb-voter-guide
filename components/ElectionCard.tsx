import Link from 'next/link';
import type { ElectionMeta } from '@/lib/types';

const statusLabels: Record<string, string> = {
  archive: 'Results Available',
  active: 'Voting Open',
  upcoming: 'Coming Soon',
};

const statusColors: Record<string, string> = {
  archive: 'bg-warmgray-100 text-warmgray-600',
  active: 'bg-sage-100 text-sage-700',
  upcoming: 'bg-terracotta-100 text-terracotta-700',
};

export default function ElectionCard({ election }: { election: ElectionMeta }) {
  const date = new Date(election.date + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/elections/${election.slug}`} className="block group">
      <div className="bg-white rounded-2xl shadow-soft p-6 border-2 border-transparent hover:border-sage-200 transition-all hover:shadow-md">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-lg font-bold text-warmgray-800 group-hover:text-sage-700 transition-colors">
            {election.name}
          </h3>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${statusColors[election.status] || statusColors.archive}`}>
            {statusLabels[election.status] || election.status}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-warmgray-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {election.location}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-1 text-sage-600 text-sm font-medium">
          <span>View results</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
