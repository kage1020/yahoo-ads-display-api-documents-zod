import { z } from 'zod';

export const AdGroupServiceEnhancedCpcEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AdGroupServiceEnhancedCpcEnabled = z.infer<typeof AdGroupServiceEnhancedCpcEnabled>;
