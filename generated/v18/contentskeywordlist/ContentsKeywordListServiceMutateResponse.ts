import { z } from 'zod';

import { error } from '../../common/Error';
import { contentsKeywordListServiceReturnValue } from './ContentsKeywordListServiceReturnValue';

export const contentsKeywordListServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: contentsKeywordListServiceReturnValue
}).nullable();

export type ContentsKeywordListServiceMutateResponse = z.infer<typeof contentsKeywordListServiceMutateResponse>;
