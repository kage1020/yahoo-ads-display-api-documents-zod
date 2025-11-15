import { z } from 'zod';

export const AudienceListServiceLineAudienceGroupOwnerType = z.string().nullable();

export type AudienceListServiceLineAudienceGroupOwnerType = z.infer<typeof AudienceListServiceLineAudienceGroupOwnerType>;
