import { z } from 'zod';

import { ReportDefinitionServiceIncludeViewInteractionFlg } from './ReportDefinitionServiceIncludeViewInteractionFlg';
import { ReportDefinitionServiceConversionPathFilter } from './ReportDefinitionServiceConversionPathFilter';

export const ReportDefinitionServiceConversionPathReportCondition = z.object({
  lookbackWindow: z.number().int().nullable(),
  includeViewInteraction: ReportDefinitionServiceIncludeViewInteractionFlg,
  conversionPathFilters: z.array(ReportDefinitionServiceConversionPathFilter).nullable()
}).nullable();

export type ReportDefinitionServiceConversionPathReportCondition = z.infer<typeof ReportDefinitionServiceConversionPathReportCondition>;
