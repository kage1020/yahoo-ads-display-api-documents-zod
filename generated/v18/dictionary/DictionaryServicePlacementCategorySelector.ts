import { z } from 'zod';

export const DictionaryServicePlacementCategorySelector = z.object({
  placementCategoryListIds: z.array(z.number().int())
}).nullable();

export type DictionaryServicePlacementCategorySelector = z.infer<typeof DictionaryServicePlacementCategorySelector>;
