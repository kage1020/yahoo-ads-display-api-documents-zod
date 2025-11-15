import { z } from 'zod';

import { Error } from './Error';
import { ContentsKeywordListServicePage } from './ContentsKeywordListServicePage';

export const ContentsKeywordListServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ContentsKeywordListServicePage
}).nullable();

export type ContentsKeywordListServiceGetResponse = z.infer<typeof ContentsKeywordListServiceGetResponse>;
