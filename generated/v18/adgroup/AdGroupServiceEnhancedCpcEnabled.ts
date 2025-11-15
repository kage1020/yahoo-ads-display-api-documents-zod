import { z } from 'zod';

export const adGroupServiceEnhancedCpcEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceEnhancedCpcEnabled = z.infer<typeof adGroupServiceEnhancedCpcEnabled>;
