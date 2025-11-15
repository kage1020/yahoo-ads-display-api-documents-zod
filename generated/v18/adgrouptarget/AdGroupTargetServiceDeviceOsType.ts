import { z } from 'zod';

export const AdGroupTargetServiceDeviceOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceOsType = z.infer<typeof AdGroupTargetServiceDeviceOsType>;
