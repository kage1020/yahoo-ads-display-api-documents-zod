import { z } from 'zod';

import { recommendationServiceDailyBudgetOverCampaign } from './RecommendationServiceDailyBudgetOverCampaign';

export const recommendationServiceDailyBudgetOver = z.object({
  dailyBudgetOverCampaignList: z.array(recommendationServiceDailyBudgetOverCampaign).nullable()
}).nullable();

export type RecommendationServiceDailyBudgetOver = z.infer<typeof recommendationServiceDailyBudgetOver>;
