import { z } from 'zod';

import { AdGroupTargetServiceDeviceType } from './AdGroupTargetServiceDeviceType';

export const AdGroupTargetServiceDeviceTarget = z.object({
  deviceType: AdGroupTargetServiceDeviceType
}).nullable();

export type AdGroupTargetServiceDeviceTarget = z.infer<typeof AdGroupTargetServiceDeviceTarget>;
