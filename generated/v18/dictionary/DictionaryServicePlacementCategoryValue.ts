import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServicePlacementCategoryList } from './DictionaryServicePlacementCategoryList';

export const DictionaryServicePlacementCategoryValue = z.object({
  errors: z.array(Error).nullable(),
  placementCategoryList: DictionaryServicePlacementCategoryList,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServicePlacementCategoryValue = z.infer<typeof DictionaryServicePlacementCategoryValue>;
