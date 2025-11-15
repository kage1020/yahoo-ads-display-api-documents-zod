import { z } from 'zod';

import { AdGroupTargetServiceAge } from './AdGroupTargetServiceAge';

export const AdGroupTargetServiceAgeTarget = z.object({
  age: AdGroupTargetServiceAge
}).nullable();

export type AdGroupTargetServiceAgeTarget = z.infer<typeof AdGroupTargetServiceAgeTarget>;
