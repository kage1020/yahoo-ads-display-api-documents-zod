import { z } from 'zod';

import { StatsServiceDeviceAppType } from './StatsServiceDeviceAppType';

export const StatsServiceAppTarget = z.object({
  deviceAppType: StatsServiceDeviceAppType
}).nullable();

export type StatsServiceAppTarget = z.infer<typeof StatsServiceAppTarget>;
