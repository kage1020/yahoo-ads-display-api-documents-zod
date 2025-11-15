import { z } from 'zod';

import { adGroupTargetServiceDeviceType } from './AdGroupTargetServiceDeviceType';

export const adGroupTargetServiceDeviceTarget = z.object({
  deviceType: adGroupTargetServiceDeviceType
}).nullable();

export type AdGroupTargetServiceDeviceTarget = z.infer<typeof adGroupTargetServiceDeviceTarget>;
