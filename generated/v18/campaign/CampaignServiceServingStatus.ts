import { z } from 'zod';

export const campaignServiceServingStatus = z.enum(["SERVING", "ENDED", "PENDING", "UNKNOWN"]).nullable();

export type CampaignServiceServingStatus = z.infer<typeof campaignServiceServingStatus>;
