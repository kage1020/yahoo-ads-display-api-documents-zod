import { z } from 'zod';

export const GuaranteedAdGroupServiceDeviceAppType = z.enum(["APP", "WEB", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceAppType = z.infer<typeof GuaranteedAdGroupServiceDeviceAppType>;
