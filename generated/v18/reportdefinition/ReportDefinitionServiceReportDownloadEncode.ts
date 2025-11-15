import { z } from 'zod';

export const reportDefinitionServiceReportDownloadEncode = z.enum(["UTF8", "UTF8_BOM", "SJIS", "UTF16LE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDownloadEncode = z.infer<typeof reportDefinitionServiceReportDownloadEncode>;
