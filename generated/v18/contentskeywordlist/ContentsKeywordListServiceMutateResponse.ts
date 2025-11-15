import { z } from 'zod';

import { Error } from './Error';
import { ContentsKeywordListServiceReturnValue } from './ContentsKeywordListServiceReturnValue';

export const ContentsKeywordListServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ContentsKeywordListServiceReturnValue
}).nullable();

export type ContentsKeywordListServiceMutateResponse = z.infer<typeof ContentsKeywordListServiceMutateResponse>;
