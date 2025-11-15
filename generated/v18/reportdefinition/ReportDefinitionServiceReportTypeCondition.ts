import { z } from 'zod';

import { reportDefinitionServiceConversionPathReportCondition } from './ReportDefinitionServiceConversionPathReportCondition';
import { reportDefinitionServiceCrossCampaignReachesReportCondition } from './ReportDefinitionServiceCrossCampaignReachesReportCondition';
import { reportDefinitionServiceReachReportCondition } from './ReportDefinitionServiceReachReportCondition';
import { reportDefinitionServiceModelComparisonReportCondition } from './ReportDefinitionServiceModelComparisonReportCondition';
import { reportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const reportDefinitionServiceReportTypeCondition = z.object({
  conversionPathReportCondition: reportDefinitionServiceConversionPathReportCondition,
  crossCampaignReachesReportCondition: reportDefinitionServiceCrossCampaignReachesReportCondition,
  reachReportCondition: reportDefinitionServiceReachReportCondition,
  modelComparisonReportCondition: reportDefinitionServiceModelComparisonReportCondition,
  reportType: reportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceReportTypeCondition = z.infer<typeof reportDefinitionServiceReportTypeCondition>;
