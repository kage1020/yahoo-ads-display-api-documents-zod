import { z } from 'zod';

import { conversionTrackerServiceLyTagConversionCompareOperator } from './ConversionTrackerServiceLyTagConversionCompareOperator';

export const conversionTrackerServiceLyTagConversionUrlRule = z.object({
  compareOperator: conversionTrackerServiceLyTagConversionCompareOperator,
  url: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceLyTagConversionUrlRule = z.infer<typeof conversionTrackerServiceLyTagConversionUrlRule>;
