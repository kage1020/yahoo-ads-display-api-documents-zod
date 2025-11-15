import { z } from 'zod';

import { recommendationServiceImpsShareBudgetLossOverCampaign } from './RecommendationServiceImpsShareBudgetLossOverCampaign';

export const recommendationServiceImpsShareBudgetLossOver = z.object({
  impsShareBudgetLossOverCampaignList: z.array(recommendationServiceImpsShareBudgetLossOverCampaign).nullable()
}).nullable();

export type RecommendationServiceImpsShareBudgetLossOver = z.infer<typeof recommendationServiceImpsShareBudgetLossOver>;
