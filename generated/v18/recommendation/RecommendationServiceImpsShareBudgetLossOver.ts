import { z } from 'zod';

import { RecommendationServiceImpsShareBudgetLossOverCampaign } from './RecommendationServiceImpsShareBudgetLossOverCampaign';

export const RecommendationServiceImpsShareBudgetLossOver = z.object({
  impsShareBudgetLossOverCampaignList: z.array(RecommendationServiceImpsShareBudgetLossOverCampaign).nullable()
}).nullable();

export type RecommendationServiceImpsShareBudgetLossOver = z.infer<typeof RecommendationServiceImpsShareBudgetLossOver>;
