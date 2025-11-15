import { z } from 'zod';

import { ReportDefinitionServiceConversionPathReportCondition } from './ReportDefinitionServiceConversionPathReportCondition';
import { ReportDefinitionServiceCrossCampaignReachesReportCondition } from './ReportDefinitionServiceCrossCampaignReachesReportCondition';
import { ReportDefinitionServiceReachReportCondition } from './ReportDefinitionServiceReachReportCondition';
import { ReportDefinitionServiceModelComparisonReportCondition } from './ReportDefinitionServiceModelComparisonReportCondition';
import { ReportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const ReportDefinitionServiceReportTypeCondition = z.object({
  conversionPathReportCondition: ReportDefinitionServiceConversionPathReportCondition,
  crossCampaignReachesReportCondition: ReportDefinitionServiceCrossCampaignReachesReportCondition,
  reachReportCondition: ReportDefinitionServiceReachReportCondition,
  modelComparisonReportCondition: ReportDefinitionServiceModelComparisonReportCondition,
  reportType: ReportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceReportTypeCondition = z.infer<typeof ReportDefinitionServiceReportTypeCondition>;
