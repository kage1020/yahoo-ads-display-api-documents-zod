import { z } from 'zod';

export const guaranteedCampaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceServingStatus = z.infer<typeof guaranteedCampaignServiceServingStatus>;
