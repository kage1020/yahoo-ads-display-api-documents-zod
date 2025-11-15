import { z } from 'zod';

import { DictionaryServiceSharedAudienceListMaster } from './DictionaryServiceSharedAudienceListMaster';

export const DictionaryServiceSharedAudienceListMaster = z.object({
  audienceListId: z.number().int().nullable(),
  audienceListName: z.string().nullable(),
  subAudienceListName: z.string().nullable(),
  children: z.array(DictionaryServiceSharedAudienceListMaster).nullable(),
  isGuaranteedPermitted: z.string().nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListMaster = z.infer<typeof DictionaryServiceSharedAudienceListMaster>;
