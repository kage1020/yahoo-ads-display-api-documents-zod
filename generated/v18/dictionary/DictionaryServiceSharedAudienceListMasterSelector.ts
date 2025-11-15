import { z } from 'zod';

import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceSharedAudienceListMasterSelector = z.object({
  lang: DictionaryServiceLang
}).nullable();

export type DictionaryServiceSharedAudienceListMasterSelector = z.infer<typeof DictionaryServiceSharedAudienceListMasterSelector>;
