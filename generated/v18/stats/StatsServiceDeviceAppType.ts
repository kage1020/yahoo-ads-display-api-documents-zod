import { z } from 'zod';

export const statsServiceDeviceAppType = z.enum(["APP", "WEB", "UNKNOWN"]).nullable();

export type StatsServiceDeviceAppType = z.infer<typeof statsServiceDeviceAppType>;
