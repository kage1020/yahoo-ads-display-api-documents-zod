import { z } from 'zod';

export const GuaranteedAdGroupServiceDeviceOsType = z.enum(["IOS", "ANDROID", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceOsType = z.infer<typeof GuaranteedAdGroupServiceDeviceOsType>;
