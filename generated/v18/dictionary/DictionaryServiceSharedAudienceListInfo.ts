import { z } from 'zod';

import { dictionaryServiceSharedAudienceListType } from './DictionaryServiceSharedAudienceListType';

export const dictionaryServiceSharedAudienceListInfo = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListNameJa: z.string().nullable(),
  audienceListNameEn: z.string().nullable(),
  audienceListType: dictionaryServiceSharedAudienceListType,
  reach: z.number().int().nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListInfo = z.infer<typeof dictionaryServiceSharedAudienceListInfo>;
