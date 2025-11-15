import { z } from 'zod';

import { DictionaryServiceSharedAudienceListMasterValue } from './DictionaryServiceSharedAudienceListMasterValue';

export const DictionaryServiceSharedAudienceListMasterPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceSharedAudienceListMasterValue).nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListMasterPage = z.infer<typeof DictionaryServiceSharedAudienceListMasterPage>;
