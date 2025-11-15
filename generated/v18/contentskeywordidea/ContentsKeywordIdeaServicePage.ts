import { z } from 'zod';

import { ContentsKeywordIdeaServiceValue } from './ContentsKeywordIdeaServiceValue';

export const ContentsKeywordIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ContentsKeywordIdeaServiceValue).nullable()
}).nullable();

export type ContentsKeywordIdeaServicePage = z.infer<typeof ContentsKeywordIdeaServicePage>;
