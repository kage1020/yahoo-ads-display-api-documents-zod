import { z } from 'zod';

export const dictionaryServicePlacementCategory = z.object({
  placementCategoryId: z.number().int(),
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable()
}).nullable();

export type DictionaryServicePlacementCategory = z.infer<typeof dictionaryServicePlacementCategory>;
