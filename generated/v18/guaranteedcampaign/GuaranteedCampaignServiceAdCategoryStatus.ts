import { z } from 'zod';

export const guaranteedCampaignServiceAdCategoryStatus = z.enum(["ADDED", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedCampaignServiceAdCategoryStatus = z.infer<typeof guaranteedCampaignServiceAdCategoryStatus>;
