import { z } from 'zod';

import { error } from '../../common/Error';
import { contentsKeywordList } from './ContentsKeywordList';

export const contentsKeywordListServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  contentsKeywordList: contentsKeywordList
}).nullable();

export type ContentsKeywordListServiceValue = z.infer<typeof contentsKeywordListServiceValue>;
