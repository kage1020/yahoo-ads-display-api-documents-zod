import { z } from 'zod';

export const contentsKeywordIdeaServiceMatchType = z.enum(["EXACT", "BROAD", "UNKNOWN"]).nullable();

export type ContentsKeywordIdeaServiceMatchType = z.infer<typeof contentsKeywordIdeaServiceMatchType>;
