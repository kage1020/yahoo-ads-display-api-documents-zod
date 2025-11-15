import { z } from 'zod';

export const ContentsKeywordListServiceContentsKeyword = z.object({
  contentsKeywordId: z.number().int().nullable()
}).nullable();

export type ContentsKeywordListServiceContentsKeyword = z.infer<typeof ContentsKeywordListServiceContentsKeyword>;
