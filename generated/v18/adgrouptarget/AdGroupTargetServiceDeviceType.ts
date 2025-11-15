import { z } from 'zod';

export const AdGroupTargetServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceType = z.infer<typeof AdGroupTargetServiceDeviceType>;
