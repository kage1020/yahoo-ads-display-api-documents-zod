import { z } from 'zod';

import { conversionTrackerServiceWebConversionSnippet } from './ConversionTrackerServiceWebConversionSnippet';

export const conversionTrackerServiceWebConversion = z.object({
  snippet: z.array(conversionTrackerServiceWebConversionSnippet).nullable()
}).nullable();

export type ConversionTrackerServiceWebConversion = z.infer<typeof conversionTrackerServiceWebConversion>;
