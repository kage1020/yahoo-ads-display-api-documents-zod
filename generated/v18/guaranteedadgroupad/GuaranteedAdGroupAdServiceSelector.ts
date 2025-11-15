import { z } from 'zod';

import { GuaranteedAdGroupAdServiceAdType } from './GuaranteedAdGroupAdServiceAdType';
import { GuaranteedAdGroupAdServiceMainMediaFormat } from './GuaranteedAdGroupAdServiceMainMediaFormat';

export const GuaranteedAdGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adGroupAdIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelIdFlg: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(GuaranteedAdGroupAdServiceAdType).nullable(),
  mainMediaFormats: z.array(GuaranteedAdGroupAdServiceMainMediaFormat).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceSelector = z.infer<typeof GuaranteedAdGroupAdServiceSelector>;
