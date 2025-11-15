import { z } from 'zod';

export const ConversionTrackerServiceIsPreviousConversion = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceIsPreviousConversion = z.infer<typeof ConversionTrackerServiceIsPreviousConversion>;
