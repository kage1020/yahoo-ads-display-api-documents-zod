import { z } from 'zod';

import { adGroupTargetServicePositionType } from './AdGroupTargetServicePositionType';

export const adGroupTargetServicePositionTarget = z.object({
  positionType: adGroupTargetServicePositionType
}).nullable();

export type AdGroupTargetServicePositionTarget = z.infer<typeof adGroupTargetServicePositionTarget>;
