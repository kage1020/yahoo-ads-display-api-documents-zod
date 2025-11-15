import { z } from 'zod';

export const AudienceListServiceData = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListName: z.string().nullable(),
  audienceListNameEn: z.string().nullable()
}).nullable();

export type AudienceListServiceData = z.infer<typeof AudienceListServiceData>;
