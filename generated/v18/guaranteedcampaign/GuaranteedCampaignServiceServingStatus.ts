import { z } from 'zod';

export const GuaranteedCampaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceServingStatus = z.infer<typeof GuaranteedCampaignServiceServingStatus>;
