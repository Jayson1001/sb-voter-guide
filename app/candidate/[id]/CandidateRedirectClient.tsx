'use client';

import { useEffect } from 'react';

export default function CandidateRedirectClient({ id }: { id: string }) {
  useEffect(() => {
    window.location.replace(`/elections/south-burlington-vt-2026/candidate/${id}`);
  }, [id]);

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <p className="text-warmgray-600">Redirecting to updated URL&hellip;</p>
    </div>
  );
}
