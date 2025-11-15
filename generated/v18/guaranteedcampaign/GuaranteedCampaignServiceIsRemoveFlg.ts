import { z } from 'zod';

export const guaranteedCampaignServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceIsRemoveFlg = z.infer<typeof guaranteedCampaignServiceIsRemoveFlg>;
