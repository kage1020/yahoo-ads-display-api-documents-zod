import { z } from 'zod';

import { RecommendationServiceDailyBudgetSmallCampaign } from './RecommendationServiceDailyBudgetSmallCampaign';

export const RecommendationServiceDailyBudgetSmall = z.object({
  dailyBudgetSmallCampaignList: z.array(RecommendationServiceDailyBudgetSmallCampaign).nullable()
}).nullable();

export type RecommendationServiceDailyBudgetSmall = z.infer<typeof RecommendationServiceDailyBudgetSmall>;
