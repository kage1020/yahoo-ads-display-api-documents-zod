import { z } from 'zod';

import { ContentsKeywordListServiceValue } from './ContentsKeywordListServiceValue';

export const ContentsKeywordListServiceReturnValue = z.object({
  values: z.array(ContentsKeywordListServiceValue).nullable()
}).nullable();

export type ContentsKeywordListServiceReturnValue = z.infer<typeof ContentsKeywordListServiceReturnValue>;
