import { z } from 'zod';

import { statsServiceDeviceType } from './StatsServiceDeviceType';

export const statsServiceDeviceTarget = z.object({
  deviceType: statsServiceDeviceType
}).nullable();

export type StatsServiceDeviceTarget = z.infer<typeof statsServiceDeviceTarget>;
