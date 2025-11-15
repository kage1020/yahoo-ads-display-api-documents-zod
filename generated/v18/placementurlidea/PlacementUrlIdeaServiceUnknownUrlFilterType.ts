import { z } from 'zod';

export const placementUrlIdeaServiceUnknownUrlFilterType = z.enum(["DISPLAY", "HIDE", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceUnknownUrlFilterType = z.infer<typeof placementUrlIdeaServiceUnknownUrlFilterType>;
