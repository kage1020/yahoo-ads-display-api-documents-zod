import { z } from 'zod';

import { reportDefinitionServiceLang } from './ReportDefinitionServiceLang';
import { reportDefinitionServiceReportType } from './ReportDefinitionServiceReportType';

export const reportDefinitionServiceGetReportFields = z.object({
  lang: reportDefinitionServiceLang,
  reportType: reportDefinitionServiceReportType
}).nullable();

export type ReportDefinitionServiceGetReportFields = z.infer<typeof reportDefinitionServiceGetReportFields>;
