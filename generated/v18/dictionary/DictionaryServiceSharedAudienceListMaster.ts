import { z } from 'zod';

import { dictionaryServiceSharedAudienceListMaster } from './DictionaryServiceSharedAudienceListMaster';

export const dictionaryServiceSharedAudienceListMaster = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListName: z.string().nullable(),
  subAudienceListName: z.string().nullable(),
  children: z.array(dictionaryServiceSharedAudienceListMaster).nullable(),
  isGuaranteedPermitted: z.string().nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListMaster = z.infer<typeof dictionaryServiceSharedAudienceListMaster>;
