import { z } from 'zod';

export const PlacementUrlIdeaServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceLang = z.infer<typeof PlacementUrlIdeaServiceLang>;
