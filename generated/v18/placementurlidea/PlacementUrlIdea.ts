import { z } from 'zod';

export const PlacementUrlIdea = z.object({
  keyword: z.string().nullable(),
  searchUrl: z.string().nullable(),
  adPlaceName: z.string().nullable(),
  desktopReaches: z.number().int().nullable(),
  desktopAdRequests: z.number().int().nullable(),
  smartPhoneReaches: z.number().int().nullable(),
  smartPhoneAdRequests: z.number().int().nullable(),
  tabletReaches: z.number().int().nullable(),
  tabletAdRequests: z.number().int().nullable(),
  reaches: z.number().int().nullable(),
  adRequests: z.number().int().nullable()
}).nullable();

export type PlacementUrlIdea = z.infer<typeof PlacementUrlIdea>;
