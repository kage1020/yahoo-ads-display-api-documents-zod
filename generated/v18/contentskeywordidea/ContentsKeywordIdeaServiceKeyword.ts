import { z } from 'zod';

import { ContentsKeywordIdeaServiceMatchType } from './ContentsKeywordIdeaServiceMatchType';

export const ContentsKeywordIdeaServiceKeyword = z.object({
  keywords: z.array(z.string().nullable()).nullable(),
  matchType: ContentsKeywordIdeaServiceMatchType
}).nullable();

export type ContentsKeywordIdeaServiceKeyword = z.infer<typeof ContentsKeywordIdeaServiceKeyword>;
