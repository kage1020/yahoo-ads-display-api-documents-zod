import { z } from 'zod';

export const ReportDefinitionServiceCrossCampaignGoal = z.object({
  campaignGoal: z.string().nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignGoal = z.infer<typeof ReportDefinitionServiceCrossCampaignGoal>;
