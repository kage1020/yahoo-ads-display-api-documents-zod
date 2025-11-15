import { z } from 'zod';

export const placementUrlIdeaServiceAdPlaceFilterType = z.enum(["MAIN_AD_PLACE", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceAdPlaceFilterType = z.infer<typeof placementUrlIdeaServiceAdPlaceFilterType>;
