import { z } from 'zod';

export const guaranteedCampaignServiceLifetimeBudget = z.object({
  amount: z.number().int().nullable(),
  price: z.number().int().nullable()
}).nullable();

export type GuaranteedCampaignServiceLifetimeBudget = z.infer<typeof guaranteedCampaignServiceLifetimeBudget>;
