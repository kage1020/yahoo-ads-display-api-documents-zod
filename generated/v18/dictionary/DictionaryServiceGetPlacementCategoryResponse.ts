import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServicePlacementCategoryPage } from './DictionaryServicePlacementCategoryPage';

export const dictionaryServiceGetPlacementCategoryResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServicePlacementCategoryPage
}).nullable();

export type DictionaryServiceGetPlacementCategoryResponse = z.infer<typeof dictionaryServiceGetPlacementCategoryResponse>;
