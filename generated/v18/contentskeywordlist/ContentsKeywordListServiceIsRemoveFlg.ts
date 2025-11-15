import { z } from 'zod';

export const contentsKeywordListServiceIsRemoveFlg = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type ContentsKeywordListServiceIsRemoveFlg = z.infer<typeof contentsKeywordListServiceIsRemoveFlg>;
