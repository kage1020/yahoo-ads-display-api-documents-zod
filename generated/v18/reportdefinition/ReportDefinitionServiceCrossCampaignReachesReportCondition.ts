import { z } from 'zod';

import { ReportDefinitionServiceCrossCampaignType } from './ReportDefinitionServiceCrossCampaignType';
import { ReportDefinitionServiceCrossCampaignId } from './ReportDefinitionServiceCrossCampaignId';
import { ReportDefinitionServiceCrossCampaignGoal } from './ReportDefinitionServiceCrossCampaignGoal';
import { ReportDefinitionServiceCrossCampaignBuying } from './ReportDefinitionServiceCrossCampaignBuying';

export const ReportDefinitionServiceCrossCampaignReachesReportCondition = z.object({
  crossCampaignType: ReportDefinitionServiceCrossCampaignType,
  crossCampaignIds: z.array(ReportDefinitionServiceCrossCampaignId).nullable(),
  crossCampaignGoals: z.array(ReportDefinitionServiceCrossCampaignGoal).nullable(),
  crossCampaignBuyingTypes: z.array(ReportDefinitionServiceCrossCampaignBuying).nullable()
}).nullable();

export type ReportDefinitionServiceCrossCampaignReachesReportCondition = z.infer<typeof ReportDefinitionServiceCrossCampaignReachesReportCondition>;
