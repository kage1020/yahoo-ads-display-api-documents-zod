import { z } from 'zod';

export const AudienceListServiceAdActionType = z.enum(["AD_CLICK", "CONVERSION", "VIDEO_VIEW", "UNKNOWN"]).nullable();

export type AudienceListServiceAdActionType = z.infer<typeof AudienceListServiceAdActionType>;
