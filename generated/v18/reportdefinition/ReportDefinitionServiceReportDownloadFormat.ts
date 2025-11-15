import { z } from 'zod';

export const reportDefinitionServiceReportDownloadFormat = z.enum(["CSV", "XML", "TSV", "EXCEL_CSV", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDownloadFormat = z.infer<typeof reportDefinitionServiceReportDownloadFormat>;
