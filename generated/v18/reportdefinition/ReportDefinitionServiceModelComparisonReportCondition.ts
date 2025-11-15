import { z } from 'zod';

import { ReportDefinitionServiceIncludeViewInteractionFlg } from './ReportDefinitionServiceIncludeViewInteractionFlg';
import { ReportDefinitionServiceIncludeVideoInteractionFlg } from './ReportDefinitionServiceIncludeVideoInteractionFlg';
import { ReportDefinitionServiceAttributionModel } from './ReportDefinitionServiceAttributionModel';

export const ReportDefinitionServiceModelComparisonReportCondition = z.object({
  lookbackWindow: z.number().int().nullable(),
  includeViewInteraction: ReportDefinitionServiceIncludeViewInteractionFlg,
  includeVideoInteraction: ReportDefinitionServiceIncludeVideoInteractionFlg,
  baseModel: ReportDefinitionServiceAttributionModel,
  comparativeModel: ReportDefinitionServiceAttributionModel
}).nullable();

export type ReportDefinitionServiceModelComparisonReportCondition = z.infer<typeof ReportDefinitionServiceModelComparisonReportCondition>;
