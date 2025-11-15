import { z } from 'zod';

export const CampaignServiceOptimizerTrainingStatus = z.enum(["PROCESSING", "COMPLETED", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignServiceOptimizerTrainingStatus = z.infer<typeof CampaignServiceOptimizerTrainingStatus>;
