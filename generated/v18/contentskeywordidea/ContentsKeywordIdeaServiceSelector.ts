import { z } from 'zod';

import { contentsKeywordIdeaServiceKeyword } from './ContentsKeywordIdeaServiceKeyword';
import { contentsKeywordIdeaServiceSortField } from './ContentsKeywordIdeaServiceSortField';
import { contentsKeywordIdeaServiceSortType } from './ContentsKeywordIdeaServiceSortType';

export const contentsKeywordIdeaServiceSelector = z.object({
  keywordIds: z.array(z.number().int().nullable()).nullable(),
  keyword: contentsKeywordIdeaServiceKeyword,
  sortField: contentsKeywordIdeaServiceSortField,
  sortType: contentsKeywordIdeaServiceSortType,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ContentsKeywordIdeaServiceSelector = z.infer<typeof contentsKeywordIdeaServiceSelector>;
