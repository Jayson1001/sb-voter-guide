import fs from 'fs';
import path from 'path';
import type { ElectionMeta, ElectionData, BudgetData, Candidate } from './types';

export function getElectionsRegistry(): ElectionMeta[] {
  const filePath = path.join(process.cwd(), 'data', 'elections-registry.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ElectionMeta[];
}

export function getElectionData(slug: string): ElectionData {
  const filePath = path.join(process.cwd(), 'data', 'elections', slug, 'election.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ElectionData;
}

export function getBudgetData(slug: string): BudgetData | null {
  const registry = getElectionsRegistry();
  const meta = registry.find(e => e.slug === slug);
  if (!meta?.hasBudget) return null;
  const filePath = path.join(process.cwd(), 'data', 'elections', slug, 'budget.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as BudgetData;
}

export function getCandidateById(
  electionSlug: string,
  candidateId: string
): { candidate: Candidate; raceTitle: string; candidateIndex: number } | null {
  const data = getElectionData(electionSlug);
  for (const race of data.races) {
    const idx = race.candidates.findIndex(c => c.id === candidateId);
    if (idx !== -1) {
      return {
        candidate: race.candidates[idx] as Candidate,
        raceTitle: race.title,
        candidateIndex: idx,
      };
    }
  }
  return null;
}

export function getAllCandidateSlugs(): { electionSlug: string; id: string }[] {
  const registry = getElectionsRegistry();
  const result: { electionSlug: string; id: string }[] = [];
  for (const election of registry) {
    const data = getElectionData(election.slug);
    for (const race of data.races) {
      for (const candidate of race.candidates) {
        result.push({ electionSlug: election.slug, id: candidate.id });
      }
    }
  }
  return result;
}
