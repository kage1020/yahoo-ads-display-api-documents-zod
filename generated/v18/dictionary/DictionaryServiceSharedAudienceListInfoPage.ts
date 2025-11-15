import { z } from 'zod';

import { DictionaryServiceSharedAudienceListInfoValue } from './DictionaryServiceSharedAudienceListInfoValue';

export const DictionaryServiceSharedAudienceListInfoPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceSharedAudienceListInfoValue).nullable()
}).nullable();

export type DictionaryServiceSharedAudienceListInfoPage = z.infer<typeof DictionaryServiceSharedAudienceListInfoPage>;
