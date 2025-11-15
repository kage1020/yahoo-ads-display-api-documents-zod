import { z } from 'zod';

export const guaranteedAdGroupServiceDeviceType = z.enum(["DESKTOP", "SMARTPHONE", "TABLET", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceType = z.infer<typeof guaranteedAdGroupServiceDeviceType>;
