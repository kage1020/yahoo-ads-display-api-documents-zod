import { z } from 'zod';

export const AdGroupServiceDeviceOsType = z.enum(["IOS", "ANDROID", "NONE", "UNKNOWN"]).nullable();

export type AdGroupServiceDeviceOsType = z.infer<typeof AdGroupServiceDeviceOsType>;
