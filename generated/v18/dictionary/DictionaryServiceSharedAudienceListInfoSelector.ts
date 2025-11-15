import { z } from 'zod';

import { dictionaryServiceSharedAudienceListType } from './DictionaryServiceSharedAudienceListType';

export const dictionaryServiceSharedAudienceListInfoSelector = z.object({
  audienceListIds: z.array(z.number().int().nullable()).nullable(),
  audienceListTypes: z.array(dictionaryServiceSharedAudienceListType).nullable(),
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListInfoSelector = z.infer<typeof dictionaryServiceSharedAudienceListInfoSelector>;
