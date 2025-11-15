import { z } from 'zod';

import { campaignServiceOptimizerTrainingStatus } from './CampaignServiceOptimizerTrainingStatus';

export const campaignServiceOptimizer = z.object({
  optimizerTrainingStatus: campaignServiceOptimizerTrainingStatus
}).nullable();

export type CampaignServiceOptimizer = z.infer<typeof campaignServiceOptimizer>;
