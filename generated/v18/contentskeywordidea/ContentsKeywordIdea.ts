import { z } from 'zod';

export const ContentsKeywordIdea = z.object({
  volume: z.number().int().nullable(),
  createdDate: z.string().nullable(),
  contentsKeyword: z.string().nullable(),
  contentsKeywordId: z.number().int().nullable()
}).nullable();

export type ContentsKeywordIdea = z.infer<typeof ContentsKeywordIdea>;
