import { z } from 'zod';

import { StatsServiceDeviceOsType } from './StatsServiceDeviceOsType';

export const StatsServiceOsTarget = z.object({
  deviceOsType: StatsServiceDeviceOsType
}).nullable();

export type StatsServiceOsTarget = z.infer<typeof StatsServiceOsTarget>;
