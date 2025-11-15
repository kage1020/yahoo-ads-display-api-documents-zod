import { z } from 'zod';

export const GuaranteedAdGroupServiceDeviceType = z.enum(["DESKTOP", "SMARTPHONE", "TABLET", "NONE", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupServiceDeviceType = z.infer<typeof GuaranteedAdGroupServiceDeviceType>;
