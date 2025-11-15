import { z } from 'zod';

export const PlacementUrlIdeaServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceSortType = z.infer<typeof PlacementUrlIdeaServiceSortType>;
