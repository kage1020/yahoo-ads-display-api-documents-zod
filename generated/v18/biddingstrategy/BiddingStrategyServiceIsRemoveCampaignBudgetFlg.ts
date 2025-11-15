import { z } from 'zod';

export const biddingStrategyServiceIsRemoveCampaignBudgetFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceIsRemoveCampaignBudgetFlg = z.infer<typeof biddingStrategyServiceIsRemoveCampaignBudgetFlg>;
