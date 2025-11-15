import { z } from 'zod';

export const statsServiceDeviceOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type StatsServiceDeviceOsType = z.infer<typeof statsServiceDeviceOsType>;
