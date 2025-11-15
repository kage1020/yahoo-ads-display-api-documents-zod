import { z } from 'zod';

import { CampaignServiceOptimizerTrainingStatus } from './CampaignServiceOptimizerTrainingStatus';

export const CampaignServiceOptimizer = z.object({
  optimizerTrainingStatus: CampaignServiceOptimizerTrainingStatus
}).nullable();

export type CampaignServiceOptimizer = z.infer<typeof CampaignServiceOptimizer>;
