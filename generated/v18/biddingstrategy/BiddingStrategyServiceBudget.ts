import { z } from 'zod';

import { BiddingStrategyServiceIsRemoveCampaignBudgetFlg } from './BiddingStrategyServiceIsRemoveCampaignBudgetFlg';

export const BiddingStrategyServiceBudget = z.object({
  campaignBudgetId: z.number().int().nullable(),
  campaignBudgetName: z.string().nullable(),
  amount: z.number().int().nullable(),
  isRemoveCampaignBudget: BiddingStrategyServiceIsRemoveCampaignBudgetFlg
}).nullable();

export type BiddingStrategyServiceBudget = z.infer<typeof BiddingStrategyServiceBudget>;
