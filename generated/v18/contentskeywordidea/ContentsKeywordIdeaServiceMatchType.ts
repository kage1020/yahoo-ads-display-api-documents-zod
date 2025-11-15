import { z } from 'zod';

export const ContentsKeywordIdeaServiceMatchType = z.enum(["EXACT", "BROAD", "UNKNOWN"]).nullable();

export type ContentsKeywordIdeaServiceMatchType = z.infer<typeof ContentsKeywordIdeaServiceMatchType>;
