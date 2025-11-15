import { z } from 'zod';

export const placementUrlIdeaServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceSortType = z.infer<typeof placementUrlIdeaServiceSortType>;
