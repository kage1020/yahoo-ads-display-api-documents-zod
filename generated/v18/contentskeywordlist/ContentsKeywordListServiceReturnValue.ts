import { z } from 'zod';

import { contentsKeywordListServiceValue } from './ContentsKeywordListServiceValue';

export const contentsKeywordListServiceReturnValue = z.object({
  values: z.array(contentsKeywordListServiceValue).nullable()
}).nullable();

export type ContentsKeywordListServiceReturnValue = z.infer<typeof contentsKeywordListServiceReturnValue>;
