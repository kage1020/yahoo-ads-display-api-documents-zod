import { z } from 'zod';

import { RecommendationServiceDailyBudgetOverCampaign } from './RecommendationServiceDailyBudgetOverCampaign';

export const RecommendationServiceDailyBudgetOver = z.object({
  dailyBudgetOverCampaignList: z.array(RecommendationServiceDailyBudgetOverCampaign).nullable()
}).nullable();

export type RecommendationServiceDailyBudgetOver = z.infer<typeof RecommendationServiceDailyBudgetOver>;
