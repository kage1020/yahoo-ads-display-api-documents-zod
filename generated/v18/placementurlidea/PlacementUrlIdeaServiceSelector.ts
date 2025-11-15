import { z } from 'zod';

import { placementUrlIdeaServiceKeywordFilterType } from './PlacementUrlIdeaServiceKeywordFilterType';
import { placementUrlIdeaServiceAdPlaceFilterType } from './PlacementUrlIdeaServiceAdPlaceFilterType';
import { placementUrlIdeaServiceAdPlaceGroupFilterType } from './PlacementUrlIdeaServiceAdPlaceGroupFilterType';
import { placementUrlIdeaServiceLang } from './PlacementUrlIdeaServiceLang';
import { placementUrlIdeaServiceUnknownUrlFilterType } from './PlacementUrlIdeaServiceUnknownUrlFilterType';
import { placementUrlIdeaServiceSortField } from './PlacementUrlIdeaServiceSortField';
import { placementUrlIdeaServiceSortType } from './PlacementUrlIdeaServiceSortType';

export const placementUrlIdeaServiceSelector = z.object({
  keyword: z.string().nullable(),
  keywordFilterTypes: z.array(placementUrlIdeaServiceKeywordFilterType).nullable(),
  adPlaceFilterTypes: z.array(placementUrlIdeaServiceAdPlaceFilterType).nullable(),
  adPlaceGroupFilterTypes: z.array(placementUrlIdeaServiceAdPlaceGroupFilterType).nullable(),
  lang: placementUrlIdeaServiceLang,
  unknownUrlFilterType: placementUrlIdeaServiceUnknownUrlFilterType,
  sortField: placementUrlIdeaServiceSortField,
  sortType: placementUrlIdeaServiceSortType,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PlacementUrlIdeaServiceSelector = z.infer<typeof placementUrlIdeaServiceSelector>;
