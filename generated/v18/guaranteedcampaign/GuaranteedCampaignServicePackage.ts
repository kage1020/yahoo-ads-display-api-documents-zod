import { z } from 'zod';

export const guaranteedCampaignServicePackage = z.object({
  packageId: z.number().int().nullable(),
  packageHistoryId: z.number().int().nullable(),
  packageName: z.string().nullable()
}).nullable();

export type GuaranteedCampaignServicePackage = z.infer<typeof guaranteedCampaignServicePackage>;
