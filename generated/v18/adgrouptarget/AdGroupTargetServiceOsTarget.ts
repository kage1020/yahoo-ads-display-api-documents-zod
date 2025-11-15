import { z } from 'zod';

import { adGroupTargetServiceDeviceOsType } from './AdGroupTargetServiceDeviceOsType';

export const adGroupTargetServiceOsTarget = z.object({
  deviceOsType: adGroupTargetServiceDeviceOsType
}).nullable();

export type AdGroupTargetServiceOsTarget = z.infer<typeof adGroupTargetServiceOsTarget>;
