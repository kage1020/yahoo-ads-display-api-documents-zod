import { z } from 'zod';

export const PlacementUrlIdeaServiceSortField = z.enum(["URL", "AD_PLACE_NAME", "DESKTOP_REACHES", "DESKTOP_AD_REQUESTS", "SMART_PHONE_REACHES", "SMART_PHONE_AD_REQUESTS", "TABLET_REACHES", "TABLET_AD_REQUESTS", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceSortField = z.infer<typeof PlacementUrlIdeaServiceSortField>;
