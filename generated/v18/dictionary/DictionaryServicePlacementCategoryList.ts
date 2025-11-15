import { z } from 'zod';

import { DictionaryServicePlacementCategory } from './DictionaryServicePlacementCategory';

export const DictionaryServicePlacementCategoryList = z.object({
  placementCategoryListId: z.number().int(),
  placementCategoryListName: z.string().nullable(),
  placementCategories: z.array(DictionaryServicePlacementCategory).nullable()
}).nullable();

export type DictionaryServicePlacementCategoryList = z.infer<typeof DictionaryServicePlacementCategoryList>;
