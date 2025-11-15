import { z } from 'zod';

import { ContentsKeywordListServiceContentsKeyword } from './ContentsKeywordListServiceContentsKeyword';
import { ContentsKeywordListServiceIsRemoveFlg } from './ContentsKeywordListServiceIsRemoveFlg';

export const ContentsKeywordList = z.object({
  accountId: z.number().int().nullable(),
  contentsKeyword: z.array(ContentsKeywordListServiceContentsKeyword).nullable(),
  contentsKeywordListDescription: z.string().nullable(),
  isRemoveContentsKeywordListDescription: ContentsKeywordListServiceIsRemoveFlg,
  contentsKeywordListId: z.number().int().nullable(),
  contentsKeywordListName: z.string().nullable(),
  brandSafetyDenyListFlg: z.boolean().nullable()
}).nullable();

export type ContentsKeywordList = z.infer<typeof ContentsKeywordList>;
