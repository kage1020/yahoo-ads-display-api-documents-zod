import { z } from 'zod';

import { conversionTrackerServiceWebConversionSnippetType } from './ConversionTrackerServiceWebConversionSnippetType';

export const conversionTrackerServiceWebConversionSnippet = z.object({
  advancedTag: z.string().nullable(),
  webConversionSnippetType: conversionTrackerServiceWebConversionSnippetType
}).nullable();

export type ConversionTrackerServiceWebConversionSnippet = z.infer<typeof conversionTrackerServiceWebConversionSnippet>;
