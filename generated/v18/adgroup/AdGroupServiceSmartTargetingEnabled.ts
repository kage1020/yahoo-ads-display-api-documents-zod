import { z } from 'zod';

export const adGroupServiceSmartTargetingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceSmartTargetingEnabled = z.infer<typeof adGroupServiceSmartTargetingEnabled>;
