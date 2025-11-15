import { z } from 'zod';

import { contentsKeywordList } from './ContentsKeywordList';

export const contentsKeywordListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(contentsKeywordList)
}).nullable();

export type ContentsKeywordListServiceOperation = z.infer<typeof contentsKeywordListServiceOperation>;
