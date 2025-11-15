import { z } from 'zod';

import { ConversionTrackerServiceLyTagConversionRuleType } from './ConversionTrackerServiceLyTagConversionRuleType';
import { ConversionTrackerServiceLyTagConversionUrlRule } from './ConversionTrackerServiceLyTagConversionUrlRule';

export const ConversionTrackerServiceLyTagConversion = z.object({
  snippetId: z.string().nullable(),
  ruleType: ConversionTrackerServiceLyTagConversionRuleType,
  urlRule: ConversionTrackerServiceLyTagConversionUrlRule
}).nullable();

export type ConversionTrackerServiceLyTagConversion = z.infer<typeof ConversionTrackerServiceLyTagConversion>;
