import { getAllCandidateSlugs } from '@/lib/elections';
import CandidateRedirectClient from './CandidateRedirectClient';

export function generateStaticParams() {
  return getAllCandidateSlugs().map(({ id }) => ({ id }));
}

export default function CandidatePage({ params }: { params: { id: string } }) {
  return <CandidateRedirectClient id={params.id} />;
}
