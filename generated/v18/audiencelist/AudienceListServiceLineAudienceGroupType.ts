import { z } from 'zod';

export const AudienceListServiceLineAudienceGroupType = z.string().nullable();

export type AudienceListServiceLineAudienceGroupType = z.infer<typeof AudienceListServiceLineAudienceGroupType>;
