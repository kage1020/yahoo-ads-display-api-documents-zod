import { z } from 'zod';

import { reportDefinitionServiceIncludeViewInteractionFlg } from './ReportDefinitionServiceIncludeViewInteractionFlg';
import { reportDefinitionServiceConversionPathFilter } from './ReportDefinitionServiceConversionPathFilter';

export const reportDefinitionServiceConversionPathReportCondition = z.object({
  lookbackWindow: z.number().int().nullable(),
  includeViewInteraction: reportDefinitionServiceIncludeViewInteractionFlg,
  conversionPathFilters: z.array(reportDefinitionServiceConversionPathFilter).nullable()
}).nullable();

export type ReportDefinitionServiceConversionPathReportCondition = z.infer<typeof reportDefinitionServiceConversionPathReportCondition>;
