import { z } from 'zod';

export const ReportDefinitionServiceReportDownloadEncode = z.enum(["UTF8", "UTF8_BOM", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDownloadEncode = z.infer<typeof ReportDefinitionServiceReportDownloadEncode>;
