import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceFeedItemGoogleProductCategory } from './DictionaryServiceFeedItemGoogleProductCategory';

export const dictionaryServiceFeedItemGoogleProductCategoryValue = z.object({
  errors: z.array(error).nullable(),
  feedItemGoogleProductCategory: dictionaryServiceFeedItemGoogleProductCategory,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceFeedItemGoogleProductCategoryValue = z.infer<typeof dictionaryServiceFeedItemGoogleProductCategoryValue>;
