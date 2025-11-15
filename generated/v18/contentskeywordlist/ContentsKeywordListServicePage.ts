import { z } from 'zod';

import { contentsKeywordListServiceValue } from './ContentsKeywordListServiceValue';

export const contentsKeywordListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(contentsKeywordListServiceValue).nullable()
}).nullable();

export type ContentsKeywordListServicePage = z.infer<typeof contentsKeywordListServicePage>;
