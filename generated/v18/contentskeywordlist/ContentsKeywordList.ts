import { z } from 'zod';

import { contentsKeywordListServiceContentsKeyword } from './ContentsKeywordListServiceContentsKeyword';
import { contentsKeywordListServiceIsRemoveFlg } from './ContentsKeywordListServiceIsRemoveFlg';

export const contentsKeywordList = z.object({
  accountId: z.number().int().nullable(),
  contentsKeyword: z.array(contentsKeywordListServiceContentsKeyword).nullable(),
  contentsKeywordListDescription: z.string().nullable(),
  isRemoveContentsKeywordListDescription: contentsKeywordListServiceIsRemoveFlg,
  contentsKeywordListId: z.number().int().nullable(),
  contentsKeywordListName: z.string().nullable(),
  brandSafetyDenyListFlg: z.boolean().nullable()
}).nullable();

export type ContentsKeywordList = z.infer<typeof contentsKeywordList>;
