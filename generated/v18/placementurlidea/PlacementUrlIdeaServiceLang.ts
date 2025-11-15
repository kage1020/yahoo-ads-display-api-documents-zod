import { z } from 'zod';

export const placementUrlIdeaServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceLang = z.infer<typeof placementUrlIdeaServiceLang>;
