import { z } from 'zod';

export const campaignServiceCampaignGoalSubtype = z.enum(["STANDARD", "INSTALL", "UNKNOWN"]).nullable();

export type CampaignServiceCampaignGoalSubtype = z.infer<typeof campaignServiceCampaignGoalSubtype>;
