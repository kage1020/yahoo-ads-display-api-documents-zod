import { z } from 'zod';

export const adGroupTargetServiceDeviceOsType = z.enum(["IOS", "ANDROID", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceOsType = z.infer<typeof adGroupTargetServiceDeviceOsType>;
