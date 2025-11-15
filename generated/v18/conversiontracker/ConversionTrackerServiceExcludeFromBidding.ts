import { z } from 'zod';

export const conversionTrackerServiceExcludeFromBidding = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceExcludeFromBidding = z.infer<typeof conversionTrackerServiceExcludeFromBidding>;
