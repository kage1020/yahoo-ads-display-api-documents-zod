import { z } from 'zod';

export const PlacementUrlIdeaServiceKeywordFilterType = z.enum(["URL", "AD_PLACE_NAME", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceKeywordFilterType = z.infer<typeof PlacementUrlIdeaServiceKeywordFilterType>;
