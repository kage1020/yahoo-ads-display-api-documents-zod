import { z } from 'zod';

import { reportDefinitionServiceFrequencyRange } from './ReportDefinitionServiceFrequencyRange';

export const reportDefinitionServiceReachReportCondition = z.object({
  frequencyRange: reportDefinitionServiceFrequencyRange
}).nullable();

export type ReportDefinitionServiceReachReportCondition = z.infer<typeof reportDefinitionServiceReachReportCondition>;
