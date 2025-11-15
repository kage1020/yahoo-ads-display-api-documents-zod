import { z } from 'zod';

import { ConversionTrackerServiceWebConversionSnippet } from './ConversionTrackerServiceWebConversionSnippet';

export const ConversionTrackerServiceWebConversion = z.object({
  snippet: z.array(ConversionTrackerServiceWebConversionSnippet).nullable()
}).nullable();

export type ConversionTrackerServiceWebConversion = z.infer<typeof ConversionTrackerServiceWebConversion>;
