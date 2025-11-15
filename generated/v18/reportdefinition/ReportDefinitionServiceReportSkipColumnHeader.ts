import { z } from 'zod';

export const ReportDefinitionServiceReportSkipColumnHeader = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof ReportDefinitionServiceReportSkipColumnHeader>;
