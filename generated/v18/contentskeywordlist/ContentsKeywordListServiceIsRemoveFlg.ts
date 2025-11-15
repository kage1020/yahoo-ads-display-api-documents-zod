import { z } from 'zod';

export const ContentsKeywordListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ContentsKeywordListServiceIsRemoveFlg = z.infer<typeof ContentsKeywordListServiceIsRemoveFlg>;
