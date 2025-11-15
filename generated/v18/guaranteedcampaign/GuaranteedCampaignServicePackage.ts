import { z } from 'zod';

export const GuaranteedCampaignServicePackage = z.object({
  packageId: z.number().int().nullable(),
  packageHistoryId: z.number().int().nullable(),
  packageName: z.string().nullable()
}).nullable();

export type GuaranteedCampaignServicePackage = z.infer<typeof GuaranteedCampaignServicePackage>;
