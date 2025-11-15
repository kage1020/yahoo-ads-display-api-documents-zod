import { z } from 'zod';

export const reportDefinitionServiceReportSkipColumnHeader = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportSkipColumnHeader = z.infer<typeof reportDefinitionServiceReportSkipColumnHeader>;
