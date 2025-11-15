import { z } from 'zod';

import { Error } from './Error';
import { ContentsKeywordIdeaServicePage } from './ContentsKeywordIdeaServicePage';

export const ContentsKeywordIdeaServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: ContentsKeywordIdeaServicePage
}).nullable();

export type ContentsKeywordIdeaServiceGetResponse = z.infer<typeof ContentsKeywordIdeaServiceGetResponse>;
