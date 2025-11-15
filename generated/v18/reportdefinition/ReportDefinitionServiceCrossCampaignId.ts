import { z } from 'zod';

export const ReportDefinitionServiceCrossCampaignId = z.object({
  campaignId: z.number().int().nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignId = z.infer<typeof ReportDefinitionServiceCrossCampaignId>;
