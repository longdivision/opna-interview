export type FinanceType = "debt" | "equity";

export type SustainableDevelopmentGoal =
  | "sdg_1"
  | "sdg_2"
  | "sdg_3"
  | "sdg_4"
  | "sdg_5"
  | "sdg_6"
  | "sdg_7"
  | "sdg_8"
  | "sdg_9"
  | "sdg_10"
  | "sdg_11"
  | "sdg_12"
  | "sdg_13"
  | "sdg_14"
  | "sdg_15"
  | "sdg_16"
  | "sdg_17";

export type InvestmentSize = {
  min_gbp: number;
  max_gbp: number;
};

export type InvestorPreferences = {
  financing_type: FinanceType;
  sustainable_development_goals: SustainableDevelopmentGoal[];
  investment_size: InvestmentSize;
};

export type DebtFinancingOption = {
  finance_type: "debt";
  amount_gbp: number;
  interest_rate: number;
  duration_months: number;
};

export type EquityFinancingOption = {
  finance_type: "equity";
  amount_gbp: number;
  equity: number;
};

export type FinancingOption = DebtFinancingOption | EquityFinancingOption;

export type MatchingScore = {
  sustainable_development_goals: number;
  investment_size: number;
  total: number;
};

export type Investor = {
  id: string;
  name: string;
  email: string;
  preferences: InvestorPreferences;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  sustainable_development_goals: SustainableDevelopmentGoal[];
  amount_gbp: number;
  financing_options: FinancingOption[];
};

export type ProjectWithMatchingScore = {
  project: Project;
  matching_score: MatchingScore;
};
