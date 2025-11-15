import { z } from 'zod';

export const conversionTrackerServiceWebConversionSnippetType = z.enum(["IMG", "JS", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceWebConversionSnippetType = z.infer<typeof conversionTrackerServiceWebConversionSnippetType>;
