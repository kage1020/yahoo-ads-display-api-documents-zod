import { z } from 'zod';

import { PlacementUrlIdeaServiceKeywordFilterType } from './PlacementUrlIdeaServiceKeywordFilterType';
import { PlacementUrlIdeaServiceAdPlaceFilterType } from './PlacementUrlIdeaServiceAdPlaceFilterType';
import { PlacementUrlIdeaServiceAdPlaceGroupFilterType } from './PlacementUrlIdeaServiceAdPlaceGroupFilterType';
import { PlacementUrlIdeaServiceLang } from './PlacementUrlIdeaServiceLang';
import { PlacementUrlIdeaServiceUnknownUrlFilterType } from './PlacementUrlIdeaServiceUnknownUrlFilterType';
import { PlacementUrlIdeaServiceSortField } from './PlacementUrlIdeaServiceSortField';
import { PlacementUrlIdeaServiceSortType } from './PlacementUrlIdeaServiceSortType';

export const PlacementUrlIdeaServiceSelector = z.object({
  keyword: z.string().nullable(),
  keywordFilterTypes: z.array(PlacementUrlIdeaServiceKeywordFilterType).nullable(),
  adPlaceFilterTypes: z.array(PlacementUrlIdeaServiceAdPlaceFilterType).nullable(),
  adPlaceGroupFilterTypes: z.array(PlacementUrlIdeaServiceAdPlaceGroupFilterType).nullable(),
  lang: PlacementUrlIdeaServiceLang,
  unknownUrlFilterType: PlacementUrlIdeaServiceUnknownUrlFilterType,
  sortField: PlacementUrlIdeaServiceSortField,
  sortType: PlacementUrlIdeaServiceSortType,
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type PlacementUrlIdeaServiceSelector = z.infer<typeof PlacementUrlIdeaServiceSelector>;
