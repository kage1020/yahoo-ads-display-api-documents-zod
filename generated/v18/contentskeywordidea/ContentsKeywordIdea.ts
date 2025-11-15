import { z } from 'zod';

export const contentsKeywordIdea = z.object({
  volume: z.number().int().nullable(),
  createdDate: z.string().nullable(),
  contentsKeyword: z.string().nullable(),
  contentsKeywordId: z.number().int().nullable()
}).nullable();

export type ContentsKeywordIdea = z.infer<typeof contentsKeywordIdea>;
