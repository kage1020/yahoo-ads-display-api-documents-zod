import { z } from 'zod';

export const ReportDefinitionServiceReportSkipReportSummary = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipReportSummary = z.infer<typeof ReportDefinitionServiceReportSkipReportSummary>;
