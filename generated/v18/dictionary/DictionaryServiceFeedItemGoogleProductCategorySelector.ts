import { z } from 'zod';

import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceFeedItemGoogleProductCategorySelector = z.object({
  lang: DictionaryServiceLang
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategorySelector = z.infer<typeof DictionaryServiceFeedItemGoogleProductCategorySelector>;
