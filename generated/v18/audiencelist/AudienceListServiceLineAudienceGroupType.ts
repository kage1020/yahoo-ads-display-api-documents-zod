import { z } from 'zod';

export const audienceListServiceLineAudienceGroupType = z.string().nullable();

export type AudienceListServiceLineAudienceGroupType = z.infer<typeof audienceListServiceLineAudienceGroupType>;
