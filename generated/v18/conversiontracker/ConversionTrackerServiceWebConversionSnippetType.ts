import { z } from 'zod';

export const ConversionTrackerServiceWebConversionSnippetType = z.enum(["IMG", "JS", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceWebConversionSnippetType = z.infer<typeof ConversionTrackerServiceWebConversionSnippetType>;
