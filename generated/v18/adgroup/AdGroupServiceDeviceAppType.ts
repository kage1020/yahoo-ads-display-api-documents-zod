import { z } from 'zod';

export const adGroupServiceDeviceAppType = z.enum(["APP", "WEB", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceAppType = z.infer<typeof adGroupServiceDeviceAppType>;
