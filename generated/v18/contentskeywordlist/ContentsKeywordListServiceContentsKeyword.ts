import { z } from 'zod';

export const contentsKeywordListServiceContentsKeyword = z.object({
  contentsKeywordId: z.number().int().nullable()
}).nullable();

export type ContentsKeywordListServiceContentsKeyword = z.infer<typeof contentsKeywordListServiceContentsKeyword>;
