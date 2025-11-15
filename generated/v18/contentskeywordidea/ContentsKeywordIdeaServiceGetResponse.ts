import { z } from 'zod';

import { error } from '../../common/Error';
import { contentsKeywordIdeaServicePage } from './ContentsKeywordIdeaServicePage';

export const contentsKeywordIdeaServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: contentsKeywordIdeaServicePage
}).nullable();

export type ContentsKeywordIdeaServiceGetResponse = z.infer<typeof contentsKeywordIdeaServiceGetResponse>;
