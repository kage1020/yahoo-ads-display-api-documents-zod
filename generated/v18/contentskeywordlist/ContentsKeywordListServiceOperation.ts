import { z } from 'zod';

import { ContentsKeywordList } from './ContentsKeywordList';

export const ContentsKeywordListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(ContentsKeywordList)
}).nullable();

export type ContentsKeywordListServiceOperation = z.infer<typeof ContentsKeywordListServiceOperation>;
