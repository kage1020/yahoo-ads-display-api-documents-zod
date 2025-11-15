import { z } from 'zod';

import { reportDefinitionServiceCrossCampaignType } from './ReportDefinitionServiceCrossCampaignType';
import { reportDefinitionServiceCrossCampaignId } from './ReportDefinitionServiceCrossCampaignId';
import { reportDefinitionServiceCrossCampaignGoal } from './ReportDefinitionServiceCrossCampaignGoal';
import { reportDefinitionServiceCrossCampaignBuying } from './ReportDefinitionServiceCrossCampaignBuying';

export const reportDefinitionServiceCrossCampaignReachesReportCondition = z.object({
  crossCampaignType: reportDefinitionServiceCrossCampaignType,
  crossCampaignIds: z.array(reportDefinitionServiceCrossCampaignId).nullable(),
  crossCampaignGoals: z.array(reportDefinitionServiceCrossCampaignGoal).nullable(),
  crossCampaignBuyingTypes: z.array(reportDefinitionServiceCrossCampaignBuying).nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignReachesReportCondition = z.infer<typeof reportDefinitionServiceCrossCampaignReachesReportCondition>;
