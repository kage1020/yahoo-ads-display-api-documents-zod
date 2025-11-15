import { z } from 'zod';

export const campaignServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceIsRemoveFlg = z.infer<typeof campaignServiceIsRemoveFlg>;
