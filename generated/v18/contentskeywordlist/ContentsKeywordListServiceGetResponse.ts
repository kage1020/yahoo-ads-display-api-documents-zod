import { z } from 'zod';

import { error } from '../../common/Error';
import { contentsKeywordListServicePage } from './ContentsKeywordListServicePage';

export const contentsKeywordListServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: contentsKeywordListServicePage
}).nullable();

export type ContentsKeywordListServiceGetResponse = z.infer<typeof contentsKeywordListServiceGetResponse>;
