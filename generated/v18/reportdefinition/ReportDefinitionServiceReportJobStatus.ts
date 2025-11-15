import { z } from 'zod';

export const ReportDefinitionServiceReportJobStatus = z.enum(["WAIT", "IN_PROGRESS", "COMPLETED", "CANCELED", "FAILED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportJobStatus = z.infer<typeof ReportDefinitionServiceReportJobStatus>;
