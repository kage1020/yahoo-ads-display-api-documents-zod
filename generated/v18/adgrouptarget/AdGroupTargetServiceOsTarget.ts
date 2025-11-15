import { z } from 'zod';

import { AdGroupTargetServiceDeviceOsType } from './AdGroupTargetServiceDeviceOsType';

export const AdGroupTargetServiceOsTarget = z.object({
  deviceOsType: AdGroupTargetServiceDeviceOsType
}).nullable();

export type AdGroupTargetServiceOsTarget = z.infer<typeof AdGroupTargetServiceOsTarget>;
