import { z } from 'zod';

export const GuaranteedCampaignServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type GuaranteedCampaignServiceLabel = z.infer<typeof GuaranteedCampaignServiceLabel>;
