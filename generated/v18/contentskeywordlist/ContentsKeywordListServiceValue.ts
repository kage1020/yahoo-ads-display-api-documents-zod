import { z } from 'zod';

import { Error } from './Error';
import { ContentsKeywordList } from './ContentsKeywordList';

export const ContentsKeywordListServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  contentsKeywordList: ContentsKeywordList
}).nullable();

export type ContentsKeywordListServiceValue = z.infer<typeof ContentsKeywordListServiceValue>;
