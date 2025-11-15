import { z } from 'zod';

export const conversionTrackerServiceAdvancedMatchingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAdvancedMatchingEnabled = z.infer<typeof conversionTrackerServiceAdvancedMatchingEnabled>;
