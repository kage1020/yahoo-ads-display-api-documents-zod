import { z } from 'zod';

export const StatsServiceDeviceAppType = z.enum(["APP", "WEB", "UNKNOWN"]).nullable();

export type StatsServiceDeviceAppType = z.infer<typeof StatsServiceDeviceAppType>;
