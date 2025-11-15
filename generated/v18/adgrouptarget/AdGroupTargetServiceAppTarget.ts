import { z } from 'zod';

import { adGroupTargetServiceDeviceAppType } from './AdGroupTargetServiceDeviceAppType';

export const adGroupTargetServiceAppTarget = z.object({
  deviceAppType: adGroupTargetServiceDeviceAppType
}).nullable();

export type AdGroupTargetServiceAppTarget = z.infer<typeof adGroupTargetServiceAppTarget>;
