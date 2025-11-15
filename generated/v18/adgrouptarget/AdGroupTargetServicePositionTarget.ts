import { z } from 'zod';

import { AdGroupTargetServicePositionType } from './AdGroupTargetServicePositionType';

export const AdGroupTargetServicePositionTarget = z.object({
  positionType: AdGroupTargetServicePositionType
}).nullable();

export type AdGroupTargetServicePositionTarget = z.infer<typeof AdGroupTargetServicePositionTarget>;
