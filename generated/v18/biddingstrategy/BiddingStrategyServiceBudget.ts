import { z } from 'zod';

import { biddingStrategyServiceIsRemoveCampaignBudgetFlg } from './BiddingStrategyServiceIsRemoveCampaignBudgetFlg';

export const biddingStrategyServiceBudget = z.object({
  campaignBudgetId: z.number().int().nullable(),
  campaignBudgetName: z.string().nullable(),
  amount: z.number().int().nullable(),
  isRemoveCampaignBudget: biddingStrategyServiceIsRemoveCampaignBudgetFlg
}).nullable();

export type BiddingStrategyServiceBudget = z.infer<typeof biddingStrategyServiceBudget>;
