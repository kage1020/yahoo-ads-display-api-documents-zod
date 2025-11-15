import { z } from 'zod';

export const reportDefinitionServiceCrossCampaignId = z.object({
  campaignId: z.number().int().nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignId = z.infer<typeof reportDefinitionServiceCrossCampaignId>;
