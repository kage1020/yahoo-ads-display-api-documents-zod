import { z } from 'zod';

export const campaignServiceSkanOptimizeAdDeliveryEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceSkanOptimizeAdDeliveryEnabled = z.infer<typeof campaignServiceSkanOptimizeAdDeliveryEnabled>;
