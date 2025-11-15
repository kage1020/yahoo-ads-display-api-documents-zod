import { z } from 'zod';

export const guaranteedCampaignServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabelIdFlg: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  conversionGroupIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type GuaranteedCampaignServiceSelector = z.infer<typeof guaranteedCampaignServiceSelector>;
