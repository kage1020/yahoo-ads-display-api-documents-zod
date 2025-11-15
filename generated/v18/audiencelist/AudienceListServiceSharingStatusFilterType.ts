import { z } from 'zod';

export const audienceListServiceSharingStatusFilterType = z.enum(["ALL", "SHARED", "NOT_SHARED", "UNKNOWN"]).nullable();

export type AudienceListServiceSharingStatusFilterType = z.infer<typeof audienceListServiceSharingStatusFilterType>;
