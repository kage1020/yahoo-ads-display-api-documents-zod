import { z } from 'zod';

import { dictionaryServiceSharedAudienceListInfoValue } from './DictionaryServiceSharedAudienceListInfoValue';

export const dictionaryServiceSharedAudienceListInfoPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceSharedAudienceListInfoValue).nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListInfoPage = z.infer<typeof dictionaryServiceSharedAudienceListInfoPage>;
