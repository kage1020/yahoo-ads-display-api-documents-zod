import { z } from 'zod';

export const audienceListServiceAdActionType = z.enum(["AD_CLICK", "CONVERSION", "VIDEO_VIEW", "UNKNOWN"]).nullable();

export type AudienceListServiceAdActionType = z.infer<typeof audienceListServiceAdActionType>;
