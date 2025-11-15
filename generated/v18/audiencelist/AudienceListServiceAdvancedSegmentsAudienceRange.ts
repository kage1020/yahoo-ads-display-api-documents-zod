import { z } from 'zod';

export const audienceListServiceAdvancedSegmentsAudienceRange = z.enum(["WIDE", "NARROW", "UNKNOWN"]).nullable();

export type AudienceListServiceAdvancedSegmentsAudienceRange = z.infer<typeof audienceListServiceAdvancedSegmentsAudienceRange>;
