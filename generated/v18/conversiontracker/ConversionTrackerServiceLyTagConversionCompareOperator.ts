import { z } from 'zod';

export const conversionTrackerServiceLyTagConversionCompareOperator = z.enum(["INCLUDED", "EQUAL", "START_WITH", "END_WITH", "NOT_EQUAL", "NOT_INCLUDED", "NOT_START_WITH", "NOT_END_WITH", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceLyTagConversionCompareOperator = z.infer<typeof conversionTrackerServiceLyTagConversionCompareOperator>;
