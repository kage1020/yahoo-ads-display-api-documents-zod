import { z } from 'zod';

import { dictionaryServiceFeedItemGoogleProductCategoryValue } from './DictionaryServiceFeedItemGoogleProductCategoryValue';

export const dictionaryServiceFeedItemGoogleProductCategoryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceFeedItemGoogleProductCategoryValue).nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategoryPage = z.infer<typeof dictionaryServiceFeedItemGoogleProductCategoryPage>;
