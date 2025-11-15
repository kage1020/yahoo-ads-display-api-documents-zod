import { z } from 'zod';

export const guaranteedAdGroupServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelIdFlg: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type GuaranteedAdGroupServiceSelector = z.infer<typeof guaranteedAdGroupServiceSelector>;
