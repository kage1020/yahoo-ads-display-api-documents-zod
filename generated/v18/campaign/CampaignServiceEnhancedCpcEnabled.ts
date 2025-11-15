import { z } from 'zod';

export const CampaignServiceEnhancedCpcEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceEnhancedCpcEnabled = z.infer<typeof CampaignServiceEnhancedCpcEnabled>;
