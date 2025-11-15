import { z } from 'zod';

export const audienceListServiceLineAudienceGroupOwnerType = z.string().nullable();

export type AudienceListServiceLineAudienceGroupOwnerType = z.infer<typeof audienceListServiceLineAudienceGroupOwnerType>;
