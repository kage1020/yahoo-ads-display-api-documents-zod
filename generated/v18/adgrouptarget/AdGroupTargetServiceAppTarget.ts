import { z } from 'zod';

import { AdGroupTargetServiceDeviceAppType } from './AdGroupTargetServiceDeviceAppType';

export const AdGroupTargetServiceAppTarget = z.object({
  deviceAppType: AdGroupTargetServiceDeviceAppType
}).nullable();

export type AdGroupTargetServiceAppTarget = z.infer<typeof AdGroupTargetServiceAppTarget>;
