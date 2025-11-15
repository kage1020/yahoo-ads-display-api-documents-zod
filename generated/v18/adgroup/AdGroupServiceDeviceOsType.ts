import { z } from 'zod';

export const adGroupServiceDeviceOsType = z.enum(["IOS", "ANDROID", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceOsType = z.infer<typeof adGroupServiceDeviceOsType>;
