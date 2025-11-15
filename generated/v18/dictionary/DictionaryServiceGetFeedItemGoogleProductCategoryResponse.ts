import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceFeedItemGoogleProductCategoryPage } from './DictionaryServiceFeedItemGoogleProductCategoryPage';

export const DictionaryServiceGetFeedItemGoogleProductCategoryResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceFeedItemGoogleProductCategoryPage
}).nullable();

export type DictionaryServiceGetFeedItemGoogleProductCategoryResponse = z.infer<typeof DictionaryServiceGetFeedItemGoogleProductCategoryResponse>;
