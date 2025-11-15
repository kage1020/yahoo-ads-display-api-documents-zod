import { z } from 'zod';

import { ContentsKeywordListServiceValue } from './ContentsKeywordListServiceValue';

export const ContentsKeywordListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(ContentsKeywordListServiceValue).nullable()
}).nullable();

export type ContentsKeywordListServicePage = z.infer<typeof ContentsKeywordListServicePage>;
