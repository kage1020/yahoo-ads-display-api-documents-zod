import { z } from 'zod';

export const adGroupTargetServiceDeviceAppType = z.enum(["APP", "WEB", "UNKNOWN"]).nullable();

export type AdGroupTargetServiceDeviceAppType = z.infer<typeof adGroupTargetServiceDeviceAppType>;
