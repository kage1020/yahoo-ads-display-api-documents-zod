import { z } from 'zod';

export const placementUrlListServiceSelector = z.object({
  accountId: z.number().int(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  urlListIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type PlacementUrlListServiceSelector = z.infer<typeof placementUrlListServiceSelector>;
