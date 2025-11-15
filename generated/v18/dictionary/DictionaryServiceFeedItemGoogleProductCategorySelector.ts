import { z } from 'zod';

import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceFeedItemGoogleProductCategorySelector = z.object({
  lang: dictionaryServiceLang
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategorySelector = z.infer<typeof dictionaryServiceFeedItemGoogleProductCategorySelector>;
