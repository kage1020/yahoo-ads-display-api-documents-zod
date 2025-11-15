import { z } from 'zod';

export const AudienceListServiceSharingStatusFilterType = z.enum(["ALL", "SHARED", "NOT_SHARED", "UNKNOWN"]).nullable();

export type AudienceListServiceSharingStatusFilterType = z.infer<typeof AudienceListServiceSharingStatusFilterType>;
