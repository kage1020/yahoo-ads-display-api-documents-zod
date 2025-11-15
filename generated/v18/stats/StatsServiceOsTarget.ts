import { z } from 'zod';

import { statsServiceDeviceOsType } from './StatsServiceDeviceOsType';

export const statsServiceOsTarget = z.object({
  deviceOsType: statsServiceDeviceOsType
}).nullable();

export type StatsServiceOsTarget = z.infer<typeof statsServiceOsTarget>;
