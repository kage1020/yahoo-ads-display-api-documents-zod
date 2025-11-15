import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceFeedItemGoogleProductCategoryPage } from './DictionaryServiceFeedItemGoogleProductCategoryPage';

export const dictionaryServiceGetFeedItemGoogleProductCategoryResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceFeedItemGoogleProductCategoryPage
}).nullable();

export type DictionaryServiceGetFeedItemGoogleProductCategoryResponse = z.infer<typeof dictionaryServiceGetFeedItemGoogleProductCategoryResponse>;
