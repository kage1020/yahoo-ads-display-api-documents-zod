import { z } from 'zod';

export const ContentsKeywordListServiceSelector = z.object({
  accountId: z.number().int(),
  contentsKeywordListIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ContentsKeywordListServiceSelector = z.infer<typeof ContentsKeywordListServiceSelector>;
