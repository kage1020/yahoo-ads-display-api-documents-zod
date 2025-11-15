import { z } from 'zod';

export const dictionaryServicePlacementCategorySelector = z.object({
  placementCategoryListIds: z.array(z.number().int())
}).nullable();

export type DictionaryServicePlacementCategorySelector = z.infer<typeof dictionaryServicePlacementCategorySelector>;
