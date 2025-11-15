import { z } from 'zod';

export const BiddingStrategyServiceIsRemoveCampaignBudgetFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceIsRemoveCampaignBudgetFlg = z.infer<typeof BiddingStrategyServiceIsRemoveCampaignBudgetFlg>;
