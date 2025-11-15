import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServicePlacementCategoryPage } from './DictionaryServicePlacementCategoryPage';

export const DictionaryServiceGetPlacementCategoryResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServicePlacementCategoryPage
}).nullable();

export type DictionaryServiceGetPlacementCategoryResponse = z.infer<typeof DictionaryServiceGetPlacementCategoryResponse>;
