import type { Metadata } from 'next';
import { getElectionData, getElectionsRegistry } from '@/lib/elections';

interface Props {
  children: React.ReactNode;
  params: { electionSlug: string };
}

export async function generateMetadata({ params }: { params: { electionSlug: string } }): Promise<Metadata> {
  const data = getElectionData(params.electionSlug);
  const { election } = data;
  const year = new Date(election.date + 'T12:00:00').getFullYear();

  return {
    title: {
      default: `${election.name} | Election Results ${year}`,
      template: `%s | ${election.name}`,
    },
    description: `Results from the ${election.name}. A nonpartisan community resource for ${election.location}.`,
    openGraph: {
      title: `${election.name} — Election Results ${year}`,
      description: `Results from the ${election.name}. A nonpartisan community resource.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'Vermont Election Guide',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${election.name} — Election Results ${year}`,
      description: `Results from the ${election.name}.`,
    },
  };
}

export function generateStaticParams() {
  const registry = getElectionsRegistry();
  return registry.map(e => ({ electionSlug: e.slug }));
}

export default function ElectionLayout({ children }: Props) {
  return <>{children}</>;
}
