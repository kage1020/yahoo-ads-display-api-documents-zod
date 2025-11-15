import { z } from 'zod';

import { DictionaryServiceSharedAudienceListType } from './DictionaryServiceSharedAudienceListType';

export const DictionaryServiceSharedAudienceListInfo = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListNameJa: z.string().nullable(),
  audienceListNameEn: z.string().nullable(),
  audienceListType: DictionaryServiceSharedAudienceListType,
  reach: z.number().int().nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListInfo = z.infer<typeof DictionaryServiceSharedAudienceListInfo>;
