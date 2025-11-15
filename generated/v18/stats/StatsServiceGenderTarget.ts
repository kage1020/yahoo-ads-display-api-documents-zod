import { z } from 'zod';

import { StatsServiceEstimateFlg } from './StatsServiceEstimateFlg';
import { StatsServiceGender } from './StatsServiceGender';

export const StatsServiceGenderTarget = z.object({
  estimateFlg: StatsServiceEstimateFlg,
  gender: StatsServiceGender
}).nullable();

export type StatsServiceGenderTarget = z.infer<typeof StatsServiceGenderTarget>;
