import { z } from 'zod';

export const ConversionTrackerServiceCountingType = z.enum(["ONE_PER_CLICK", "MANY_PER_CLICK", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceCountingType = z.infer<typeof ConversionTrackerServiceCountingType>;
