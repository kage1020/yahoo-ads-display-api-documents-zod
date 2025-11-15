import { z } from 'zod';

export const PlacementUrlIdeaServiceAdPlaceGroupFilterType = z.enum(["YAHOO_JAPAN_ALL", "YAHOO_JAPAN_SERVICE", "LINE_ALL", "LINE_SERVICE", "LINE_FAMILY_ALL", "OTHER", "UNKNOWN"]).nullable();

export type PlacementUrlIdeaServiceAdPlaceGroupFilterType = z.infer<typeof PlacementUrlIdeaServiceAdPlaceGroupFilterType>;
