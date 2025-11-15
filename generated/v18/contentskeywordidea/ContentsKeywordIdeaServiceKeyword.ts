import { z } from 'zod';

import { contentsKeywordIdeaServiceMatchType } from './ContentsKeywordIdeaServiceMatchType';

export const contentsKeywordIdeaServiceKeyword = z.object({
  keywords: z.array(z.string().nullable()).nullable(),
  matchType: contentsKeywordIdeaServiceMatchType
}).nullable();

export type ContentsKeywordIdeaServiceKeyword = z.infer<typeof contentsKeywordIdeaServiceKeyword>;
