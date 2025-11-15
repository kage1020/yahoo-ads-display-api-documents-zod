import { z } from 'zod';

import { ConversionTrackerServiceWebConversionSnippetType } from './ConversionTrackerServiceWebConversionSnippetType';

export const ConversionTrackerServiceWebConversionSnippet = z.object({
  advancedTag: z.string().nullable(),
  webConversionSnippetType: ConversionTrackerServiceWebConversionSnippetType
}).nullable();

export type ConversionTrackerServiceWebConversionSnippet = z.infer<typeof ConversionTrackerServiceWebConversionSnippet>;
