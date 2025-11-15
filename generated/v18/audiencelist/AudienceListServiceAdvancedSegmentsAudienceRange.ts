import { z } from 'zod';

export const AudienceListServiceAdvancedSegmentsAudienceRange = z.enum(["WIDE", "NARROW", "UNKNOWN"]).nullable();

export type AudienceListServiceAdvancedSegmentsAudienceRange = z.infer<typeof AudienceListServiceAdvancedSegmentsAudienceRange>;
