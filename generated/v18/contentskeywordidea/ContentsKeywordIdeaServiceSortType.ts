import { z } from 'zod';

export const contentsKeywordIdeaServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type ContentsKeywordIdeaServiceSortType = z.infer<typeof contentsKeywordIdeaServiceSortType>;
