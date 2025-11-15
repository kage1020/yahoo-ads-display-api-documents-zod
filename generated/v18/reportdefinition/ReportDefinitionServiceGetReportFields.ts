import { z } from 'zod';

import { ReportDefinitionServiceLang } from './ReportDefinitionServiceLang';
import { ReportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const ReportDefinitionServiceGetReportFields = z.object({
  lang: ReportDefinitionServiceLang,
  reportType: ReportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceGetReportFields = z.infer<typeof ReportDefinitionServiceGetReportFields>;
