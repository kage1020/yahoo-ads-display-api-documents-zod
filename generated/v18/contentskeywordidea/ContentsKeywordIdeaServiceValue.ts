import { z } from 'zod';

import { error } from '../../common/Error';
import { contentsKeywordIdea } from './ContentsKeywordIdea';

export const contentsKeywordIdeaServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  contentsKeywordIdea: contentsKeywordIdea
}).nullable();

export type ContentsKeywordIdeaServiceValue = z.infer<typeof contentsKeywordIdeaServiceValue>;
