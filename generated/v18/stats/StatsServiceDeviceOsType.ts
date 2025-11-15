import { z } from 'zod';

export const StatsServiceDeviceOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type StatsServiceDeviceOsType = z.infer<typeof StatsServiceDeviceOsType>;
