import { z } from 'zod';

export const guaranteedAdGroupServiceDeviceAppType = z.enum(["APP", "WEB", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceAppType = z.infer<typeof guaranteedAdGroupServiceDeviceAppType>;
