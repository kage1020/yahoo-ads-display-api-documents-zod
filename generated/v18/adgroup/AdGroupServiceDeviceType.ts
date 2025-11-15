import { z } from 'zod';

export const AdGroupServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceType = z.infer<typeof AdGroupServiceDeviceType>;
