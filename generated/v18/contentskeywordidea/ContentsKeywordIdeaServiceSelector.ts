import { z } from 'zod';

import { ContentsKeywordIdeaServiceKeyword } from './ContentsKeywordIdeaServiceKeyword';
import { ContentsKeywordIdeaServiceSortField } from './ContentsKeywordIdeaServiceSortField';
import { ContentsKeywordIdeaServiceSortType } from './ContentsKeywordIdeaServiceSortType';

export const ContentsKeywordIdeaServiceSelector = z.object({
  keywordIds: z.array(z.number().int().nullable()).nullable(),
  keyword: ContentsKeywordIdeaServiceKeyword,
  sortField: ContentsKeywordIdeaServiceSortField,
  sortType: ContentsKeywordIdeaServiceSortType,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ContentsKeywordIdeaServiceSelector = z.infer<typeof ContentsKeywordIdeaServiceSelector>;
