import { z } from 'zod';

export const placementUrlIdeaServiceKeywordFilterType = z.enum(["URL", "AD_PLACE_NAME", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceKeywordFilterType = z.infer<typeof placementUrlIdeaServiceKeywordFilterType>;
