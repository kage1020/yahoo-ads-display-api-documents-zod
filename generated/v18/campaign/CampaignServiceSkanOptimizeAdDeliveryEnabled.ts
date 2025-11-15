import { z } from 'zod';

export const CampaignServiceSkanOptimizeAdDeliveryEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceSkanOptimizeAdDeliveryEnabled = z.infer<typeof CampaignServiceSkanOptimizeAdDeliveryEnabled>;
