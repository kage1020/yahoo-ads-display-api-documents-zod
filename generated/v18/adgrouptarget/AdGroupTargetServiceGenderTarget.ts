import { z } from 'zod';

import { AdGroupTargetServiceGender } from './AdGroupTargetServiceGender';

export const AdGroupTargetServiceGenderTarget = z.object({
  gender: AdGroupTargetServiceGender
}).nullable();

export type AdGroupTargetServiceGenderTarget = z.infer<typeof AdGroupTargetServiceGenderTarget>;
