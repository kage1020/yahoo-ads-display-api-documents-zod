import { z } from 'zod';

export const reportDefinitionServiceCrossCampaignGoal = z.object({
  campaignGoal: z.string().nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignGoal = z.infer<typeof reportDefinitionServiceCrossCampaignGoal>;
