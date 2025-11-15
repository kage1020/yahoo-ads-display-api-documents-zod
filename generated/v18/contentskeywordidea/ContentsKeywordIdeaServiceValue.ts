import { z } from 'zod';

import { Error } from './Error';
import { ContentsKeywordIdea } from './ContentsKeywordIdea';

export const ContentsKeywordIdeaServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  contentsKeywordIdea: ContentsKeywordIdea
}).nullable();

export type ContentsKeywordIdeaServiceValue = z.infer<typeof ContentsKeywordIdeaServiceValue>;
