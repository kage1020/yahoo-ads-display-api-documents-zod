import { z } from 'zod';

import { DictionaryServicePlacementCategoryValue } from './DictionaryServicePlacementCategoryValue';

export const DictionaryServicePlacementCategoryPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServicePlacementCategoryValue).nullable()
}).nullable();

export type DictionaryServicePlacementCategoryPage = z.infer<typeof DictionaryServicePlacementCategoryPage>;
