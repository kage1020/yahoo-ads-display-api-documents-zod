import { z } from 'zod';

import { conversionTrackerServiceLyTagConversionRuleType } from './ConversionTrackerServiceLyTagConversionRuleType';
import { conversionTrackerServiceLyTagConversionUrlRule } from './ConversionTrackerServiceLyTagConversionUrlRule';

export const conversionTrackerServiceLyTagConversion = z.object({
  snippetId: z.string().nullable(),
  ruleType: conversionTrackerServiceLyTagConversionRuleType,
  urlRule: conversionTrackerServiceLyTagConversionUrlRule
}).nullable();

export type ConversionTrackerServiceLyTagConversion = z.infer<typeof conversionTrackerServiceLyTagConversion>;
