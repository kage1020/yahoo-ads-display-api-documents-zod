import { z } from 'zod';

export const adGroupServiceDeviceType = z.enum(["DESKTOP", "WAP_MOBILE", "SMARTPHONE", "TABLET", "CONNECTED_TV", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceType = z.infer<typeof adGroupServiceDeviceType>;
