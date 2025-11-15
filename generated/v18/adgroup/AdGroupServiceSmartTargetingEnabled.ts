import { z } from 'zod';

export const AdGroupServiceSmartTargetingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceSmartTargetingEnabled = z.infer<typeof AdGroupServiceSmartTargetingEnabled>;
