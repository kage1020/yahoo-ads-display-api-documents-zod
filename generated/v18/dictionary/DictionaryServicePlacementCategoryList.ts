import { z } from 'zod';

import { dictionaryServicePlacementCategory } from './DictionaryServicePlacementCategory';

export const dictionaryServicePlacementCategoryList = z.object({
  placementCategoryListId: z.number().int(),
  placementCategoryListName: z.string().nullable(),
  placementCategories: z.array(dictionaryServicePlacementCategory).nullable()
}).nullable();

export type DictionaryServicePlacementCategoryList = z.infer<typeof dictionaryServicePlacementCategoryList>;
