import { z } from 'zod';

import { guaranteedAdGroupAdServiceAdType } from './GuaranteedAdGroupAdServiceAdType';
import { guaranteedAdGroupAdServiceMainMediaFormat } from './GuaranteedAdGroupAdServiceMainMediaFormat';

export const guaranteedAdGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adGroupAdIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelIdFlg: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(guaranteedAdGroupAdServiceAdType).nullable(),
  mainMediaFormats: z.array(guaranteedAdGroupAdServiceMainMediaFormat).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceSelector = z.infer<typeof guaranteedAdGroupAdServiceSelector>;
