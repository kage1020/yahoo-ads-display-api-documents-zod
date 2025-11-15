import { z } from 'zod';

export const guaranteedCampaignServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceUserStatus = z.infer<typeof guaranteedCampaignServiceUserStatus>;
