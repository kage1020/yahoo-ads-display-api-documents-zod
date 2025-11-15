import { z } from 'zod';

import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceSharedAudienceListMasterSelector = z.object({
  lang: dictionaryServiceLang
}).nullable();

export type DictionaryServiceSharedAudienceListMasterSelector = z.infer<typeof dictionaryServiceSharedAudienceListMasterSelector>;
