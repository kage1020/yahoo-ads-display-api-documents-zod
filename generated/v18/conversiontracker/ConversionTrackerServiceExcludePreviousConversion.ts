import { z } from 'zod';

export const conversionTrackerServiceExcludePreviousConversion = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludePreviousConversion = z.infer<typeof conversionTrackerServiceExcludePreviousConversion>;
