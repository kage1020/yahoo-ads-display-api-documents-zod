import { z } from 'zod';

export const statsServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "UNKNOWN"]).nullable();

export type StatsServiceDeviceType = z.infer<typeof statsServiceDeviceType>;
