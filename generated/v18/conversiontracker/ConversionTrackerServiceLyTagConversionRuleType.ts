import { z } from 'zod';

export const ConversionTrackerServiceLyTagConversionRuleType = z.enum(["URL", "EVENT_TYPE", "EVENT_SNIPPET", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceLyTagConversionRuleType = z.infer<typeof ConversionTrackerServiceLyTagConversionRuleType>;
