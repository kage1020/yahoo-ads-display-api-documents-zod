import { z } from 'zod';

export const ConversionTrackerServiceExcludePreviousConversion = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludePreviousConversion = z.infer<typeof ConversionTrackerServiceExcludePreviousConversion>;
