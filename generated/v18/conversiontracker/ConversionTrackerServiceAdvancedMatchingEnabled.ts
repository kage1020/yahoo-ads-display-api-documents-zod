import { z } from 'zod';

export const ConversionTrackerServiceAdvancedMatchingEnabled = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAdvancedMatchingEnabled = z.infer<typeof ConversionTrackerServiceAdvancedMatchingEnabled>;
