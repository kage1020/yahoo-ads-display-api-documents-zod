import { z } from 'zod';

import { reportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';

export const reportDefinitionServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  reportJobIds: z.array(z.number().int().nullable()).nullable(),
  reportJobStatuses: z.array(reportDefinitionServiceReportJobStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type ReportDefinitionServiceSelector = z.infer<typeof reportDefinitionServiceSelector>;
