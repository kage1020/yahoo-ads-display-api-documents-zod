import { z } from 'zod';

export const CampaignServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceIsRemoveFlg = z.infer<typeof CampaignServiceIsRemoveFlg>;
