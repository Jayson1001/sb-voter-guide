export interface ElectionMeta {
  slug: string;
  name: string;
  date: string;
  location: string;
  state: string;
  status: 'active' | 'archive' | 'upcoming';
  featured: boolean;
  hasBudget: boolean;
}

export type ElectionsRegistry = ElectionMeta[];

export interface CivicRecordItem {
  date: string;
  action: string;
  context: string;
  source: string;
}

export interface WriteInChallenge {
  name: string;
  votes: number;
}

export interface Candidate {
  id: string;
  name: string;
  photoUrl?: string;
  website?: string;
  background: string;
  experience: string[];
  positions: Record<string, { title: string; stance: string }>;
  civicRecord?: CivicRecordItem[];
  civicRecordNote?: string;
  endorsements?: string[];
  sources: { title: string; url: string }[];
  elected?: boolean;
  votes?: number;
}

export interface Race {
  id: string;
  title: string;
  contested: boolean;
  type?: string;
  candidates: Candidate[];
  writeInChallenges?: WriteInChallenge[];
  writeInWinner?: { name: string; votes?: number };
}

export interface BallotArticle {
  id: string;
  title: string;
  description: string;
  amount?: string;
  passed?: boolean;
  votesYes?: number;
  votesNo?: number;
  details?: { funding?: string };
}

export interface ElectionData {
  lastUpdated: string;
  election: {
    name: string;
    date: string;
    location: string;
    pollingHours: string;
    pollingLocations: string[];
    publicHearing?: { date: string; time: string; description: string };
    earlyVoting?: {
      available: boolean;
      startDate: string;
      endDate: string;
      endTime: string;
      location: string;
      hours: string;
      dropBox: string;
      note: string;
    };
    absenteeBallot?: {
      requestDeadline: string;
      availableDate: string;
      requestUrl: string;
      note: string;
    };
    voterRegistration?: { deadline: string; checkUrl: string; registerUrl: string };
  };
  results?: {
    totalBallotsCast: number;
    qualifiedVoters: number;
    turnoutPercent: number;
  };
  ballotArticles: BallotArticle[];
  races: Race[];
  keyIssues?: Record<string, { title: string; description: string }>;
  resources?: {
    cityClerk: string;
    sampleBallot: string;
    budgetInfo: string;
    candidateForum?: string;
    electionCoverage?: string;
  };
}

export interface BudgetBreakdownItem {
  category: string;
  amount: number;
  percentOfGeneral: number;
}

export interface BudgetData {
  lastUpdated: string;
  fiscalYear: string;
  cityBudget: {
    total: number;
    generalFund: number;
    previousYear: { total: number; generalFund: number };
    percentIncrease: number;
    breakdown: BudgetBreakdownItem[];
    enterpriseFunds: {
      note: string;
      funds: { name: string; rateIncrease: number }[];
      estimatedAnnualIncrease: number;
      minimumAccountIncrease: number;
    };
  };
  taxRates: {
    current: { municipal: number; homesteadEducation: number; totalHomestead: number };
    proposed: { municipal: number; homesteadEducation: number; totalHomestead: number };
    historical: { year: string; municipal: number; homesteadEd: number; totalHomestead: number }[];
  };
  fireStationBond: {
    amount: number;
    squareFootage: number;
    location: string;
    yearBuilt: number;
    currentStaffing: string;
    reason: string;
    fundingSources: string[];
  };
  sources: { title: string; url: string }[];
}
