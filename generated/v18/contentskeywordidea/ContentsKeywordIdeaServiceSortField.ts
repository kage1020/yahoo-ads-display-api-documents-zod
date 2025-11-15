import { z } from 'zod';

export const contentsKeywordIdeaServiceSortField = z.enum(["KEYWORD", "KEYWORD_ID", "SEARCH_VOLUME", "CREATED_DATE", "UNKNOWN"]).nullable();

export type ContentsKeywordIdeaServiceSortField = z.infer<typeof contentsKeywordIdeaServiceSortField>;
