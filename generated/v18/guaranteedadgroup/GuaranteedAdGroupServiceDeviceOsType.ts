import { z } from 'zod';

export const guaranteedAdGroupServiceDeviceOsType = z.enum(["IOS", "ANDROID", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceOsType = z.infer<typeof guaranteedAdGroupServiceDeviceOsType>;
