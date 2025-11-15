import { z } from 'zod';

export const campaignServiceEnhancedCpcEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type CampaignServiceEnhancedCpcEnabled = z.infer<typeof campaignServiceEnhancedCpcEnabled>;
