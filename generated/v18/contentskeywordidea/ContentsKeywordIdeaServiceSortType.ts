import { z } from 'zod';

export const ContentsKeywordIdeaServiceSortType = z.enum(["ASC", "DESC", "UNKNOWN"]).nullable();

export type ContentsKeywordIdeaServiceSortType = z.infer<typeof ContentsKeywordIdeaServiceSortType>;
