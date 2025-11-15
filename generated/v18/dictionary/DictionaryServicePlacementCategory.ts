import { z } from 'zod';

export const DictionaryServicePlacementCategory = z.object({
  placementCategoryId: z.number().int(),
  placementCategoryNameJa: z.string().nullable(),
  placementCategoryNameEn: z.string().nullable()
}).nullable();

export type DictionaryServicePlacementCategory = z.infer<typeof DictionaryServicePlacementCategory>;
