import { z } from 'zod';

export const PlacementUrlIdeaServiceUnknownUrlFilterType = z.enum(["DISPLAY", "HIDE", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceUnknownUrlFilterType = z.infer<typeof PlacementUrlIdeaServiceUnknownUrlFilterType>;
