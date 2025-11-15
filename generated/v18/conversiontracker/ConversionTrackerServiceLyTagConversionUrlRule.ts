import { z } from 'zod';

import { ConversionTrackerServiceLyTagConversionCompareOperator } from './ConversionTrackerServiceLyTagConversionCompareOperator';

export const ConversionTrackerServiceLyTagConversionUrlRule = z.object({
  compareOperator: ConversionTrackerServiceLyTagConversionCompareOperator,
  url: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceLyTagConversionUrlRule = z.infer<typeof ConversionTrackerServiceLyTagConversionUrlRule>;
