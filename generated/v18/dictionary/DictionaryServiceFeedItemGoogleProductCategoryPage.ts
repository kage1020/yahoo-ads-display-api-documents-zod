import { z } from 'zod';

import { DictionaryServiceFeedItemGoogleProductCategoryValue } from './DictionaryServiceFeedItemGoogleProductCategoryValue';

export const DictionaryServiceFeedItemGoogleProductCategoryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceFeedItemGoogleProductCategoryValue).nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategoryPage = z.infer<typeof DictionaryServiceFeedItemGoogleProductCategoryPage>;
