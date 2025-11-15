import { z } from 'zod';

import { recommendationServiceDailyBudgetSmallCampaign } from './RecommendationServiceDailyBudgetSmallCampaign';

export const recommendationServiceDailyBudgetSmall = z.object({
  dailyBudgetSmallCampaignList: z.array(recommendationServiceDailyBudgetSmallCampaign).nullable()
}).nullable();

export type RecommendationServiceDailyBudgetSmall = z.infer<typeof recommendationServiceDailyBudgetSmall>;
