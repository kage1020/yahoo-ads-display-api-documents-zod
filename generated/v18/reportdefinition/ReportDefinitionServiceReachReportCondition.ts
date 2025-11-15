import { z } from 'zod';

import { ReportDefinitionServiceFrequencyRange } from './ReportDefinitionServiceFrequencyRange';

export const ReportDefinitionServiceReachReportCondition = z.object({
  frequencyRange: ReportDefinitionServiceFrequencyRange
}).nullable();

export type ReportDefinitionServiceReachReportCondition = z.infer<typeof ReportDefinitionServiceReachReportCondition>;
