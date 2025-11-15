import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServicePlacementCategoryList } from './DictionaryServicePlacementCategoryList';

export const dictionaryServicePlacementCategoryValue = z.object({
  errors: z.array(error).nullable(),
  placementCategoryList: dictionaryServicePlacementCategoryList,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServicePlacementCategoryValue = z.infer<typeof dictionaryServicePlacementCategoryValue>;
