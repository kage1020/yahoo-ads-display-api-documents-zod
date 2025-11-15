import { z } from 'zod';

export const reportDefinitionServiceReportSkipReportSummary = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipReportSummary = z.infer<typeof reportDefinitionServiceReportSkipReportSummary>;
