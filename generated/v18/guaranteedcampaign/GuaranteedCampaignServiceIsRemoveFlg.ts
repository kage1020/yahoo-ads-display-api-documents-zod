import { z } from 'zod';

export const GuaranteedCampaignServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceIsRemoveFlg = z.infer<typeof GuaranteedCampaignServiceIsRemoveFlg>;
