import { z } from 'zod';

import { dictionaryServiceSharedAudienceListMasterValue } from './DictionaryServiceSharedAudienceListMasterValue';

export const dictionaryServiceSharedAudienceListMasterPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceSharedAudienceListMasterValue).nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListMasterPage = z.infer<typeof dictionaryServiceSharedAudienceListMasterPage>;
