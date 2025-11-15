import { z } from 'zod';

export const CampaignServiceCampaignGoalSubtype = z.enum(["STANDARD", "INSTALL", "UNKNOWN"]).nullable();

export type CampaignServiceCampaignGoalSubtype = z.infer<typeof CampaignServiceCampaignGoalSubtype>;
