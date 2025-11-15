import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceFeedItemGoogleProductCategory } from './DictionaryServiceFeedItemGoogleProductCategory';

export const DictionaryServiceFeedItemGoogleProductCategoryValue = z.object({
  errors: z.array(Error).nullable(),
  feedItemGoogleProductCategory: DictionaryServiceFeedItemGoogleProductCategory,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategoryValue = z.infer<typeof DictionaryServiceFeedItemGoogleProductCategoryValue>;
