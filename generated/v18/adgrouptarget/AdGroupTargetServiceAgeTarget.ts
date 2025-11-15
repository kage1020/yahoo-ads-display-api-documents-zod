import { z } from 'zod';

import { adGroupTargetServiceAge } from './AdGroupTargetServiceAge';

export const adGroupTargetServiceAgeTarget = z.object({
  age: adGroupTargetServiceAge
}).nullable();

export type AdGroupTargetServiceAgeTarget = z.infer<typeof adGroupTargetServiceAgeTarget>;
