import { z } from 'zod';

export const campaignServiceOptimizerTrainingStatus = z.enum(["PROCESSING", "COMPLETED", "PAUSED", "UNKNOWN"]).nullable();

export type CampaignServiceOptimizerTrainingStatus = z.infer<typeof campaignServiceOptimizerTrainingStatus>;
