import { z } from 'zod';

export const ConversionTrackerServiceExcludeFromBidding = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludeFromBidding = z.infer<typeof ConversionTrackerServiceExcludeFromBidding>;
