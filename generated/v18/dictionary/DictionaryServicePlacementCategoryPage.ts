import { z } from 'zod';

import { dictionaryServicePlacementCategoryValue } from './DictionaryServicePlacementCategoryValue';

export const dictionaryServicePlacementCategoryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServicePlacementCategoryValue).nullable()
}).nullable();

export type DictionaryServicePlacementCategoryPage = z.infer<typeof dictionaryServicePlacementCategoryPage>;
