import { z } from 'zod';

export const AdGroupServiceDeviceAppType = z.enum(["APP", "WEB", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceAppType = z.infer<typeof AdGroupServiceDeviceAppType>;
