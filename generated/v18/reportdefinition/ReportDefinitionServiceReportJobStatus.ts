import { z } from 'zod';

export const reportDefinitionServiceReportJobStatus = z.enum(["WAIT", "IN_PROGRESS", "COMPLETED", "CANCELED", "FAILED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportJobStatus = z.infer<typeof reportDefinitionServiceReportJobStatus>;
