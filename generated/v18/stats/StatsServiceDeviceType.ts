import { z } from 'zod';

export const StatsServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "UNKNOWN"]).nullable();

export type StatsServiceDeviceType = z.infer<typeof StatsServiceDeviceType>;
