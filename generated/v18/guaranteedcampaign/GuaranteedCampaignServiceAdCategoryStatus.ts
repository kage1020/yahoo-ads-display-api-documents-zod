import { z } from 'zod';

export const GuaranteedCampaignServiceAdCategoryStatus = z.enum(["ADDED", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceAdCategoryStatus = z.infer<typeof GuaranteedCampaignServiceAdCategoryStatus>;
