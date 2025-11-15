import { z } from 'zod';

export const AdGroupTargetServiceDeviceAppType = z.enum(["APP", "WEB", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceAppType = z.infer<typeof AdGroupTargetServiceDeviceAppType>;
