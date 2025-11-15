import { z } from 'zod';

import { StatsServiceDeviceType } from './StatsServiceDeviceType';

export const StatsServiceDeviceTarget = z.object({
  deviceType: StatsServiceDeviceType
}).nullable();

export type StatsServiceDeviceTarget = z.infer<typeof StatsServiceDeviceTarget>;
