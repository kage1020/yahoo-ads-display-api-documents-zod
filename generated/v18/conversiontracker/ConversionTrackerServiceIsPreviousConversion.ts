import { z } from 'zod';

export const conversionTrackerServiceIsPreviousConversion = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceIsPreviousConversion = z.infer<typeof conversionTrackerServiceIsPreviousConversion>;
