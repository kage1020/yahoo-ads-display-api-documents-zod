import { z } from 'zod';

export const CampaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "UNKNOWN"]).nullable();

export type CampaignServiceServingStatus = z.infer<typeof CampaignServiceServingStatus>;
