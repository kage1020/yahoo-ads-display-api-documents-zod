import { z } from 'zod';

export const adGroupTargetServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceType = z.infer<typeof adGroupTargetServiceDeviceType>;
