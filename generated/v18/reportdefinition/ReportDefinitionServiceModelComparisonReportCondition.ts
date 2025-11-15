import { z } from 'zod';

import { reportDefinitionServiceIncludeViewInteractionFlg } from './ReportDefinitionServiceIncludeViewInteractionFlg';
import { reportDefinitionServiceIncludeVideoInteractionFlg } from './ReportDefinitionServiceIncludeVideoInteractionFlg';
import { reportDefinitionServiceAttributionModel } from './ReportDefinitionServiceAttributionModel';

export const reportDefinitionServiceModelComparisonReportCondition = z.object({
  lookbackWindow: z.number().int().nullable(),
  includeViewInteraction: reportDefinitionServiceIncludeViewInteractionFlg,
  includeVideoInteraction: reportDefinitionServiceIncludeVideoInteractionFlg,
  baseModel: reportDefinitionServiceAttributionModel,
  comparativeModel: reportDefinitionServiceAttributionModel
}).nullable();

export type ReportDefinitionServiceModelComparisonReportCondition = z.infer<typeof reportDefinitionServiceModelComparisonReportCondition>;
