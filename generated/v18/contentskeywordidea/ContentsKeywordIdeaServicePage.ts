import { z } from 'zod';

import { contentsKeywordIdeaServiceValue } from './ContentsKeywordIdeaServiceValue';

export const contentsKeywordIdeaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(contentsKeywordIdeaServiceValue).nullable()
}).nullable();

export type ContentsKeywordIdeaServicePage = z.infer<typeof contentsKeywordIdeaServicePage>;
