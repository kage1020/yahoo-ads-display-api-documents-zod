import { z } from 'zod';

import { adGroupTargetServiceGender } from './AdGroupTargetServiceGender';

export const adGroupTargetServiceGenderTarget = z.object({
  gender: adGroupTargetServiceGender
}).nullable();

export type AdGroupTargetServiceGenderTarget = z.infer<typeof adGroupTargetServiceGenderTarget>;
