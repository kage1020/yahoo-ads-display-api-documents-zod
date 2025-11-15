import { z } from 'zod';

export const GuaranteedCampaignServiceUserStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceUserStatus = z.infer<typeof GuaranteedCampaignServiceUserStatus>;
