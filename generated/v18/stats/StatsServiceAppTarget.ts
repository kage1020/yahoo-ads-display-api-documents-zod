import { z } from 'zod';

import { statsServiceDeviceAppType } from './StatsServiceDeviceAppType';

export const statsServiceAppTarget = z.object({
  deviceAppType: statsServiceDeviceAppType
}).nullable();

export type StatsServiceAppTarget = z.infer<typeof statsServiceAppTarget>;
