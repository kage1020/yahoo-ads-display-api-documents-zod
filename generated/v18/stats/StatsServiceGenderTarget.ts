import { z } from 'zod';

import { statsServiceEstimateFlg } from './StatsServiceEstimateFlg';
import { statsServiceGender } from './StatsServiceGender';

export const statsServiceGenderTarget = z.object({
  estimateFlg: statsServiceEstimateFlg,
  gender: statsServiceGender
}).nullable();

export type StatsServiceGenderTarget = z.infer<typeof statsServiceGenderTarget>;
