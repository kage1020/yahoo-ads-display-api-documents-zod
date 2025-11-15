import { z } from 'zod';

export const ReportDefinitionServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceLang = z.infer<typeof ReportDefinitionServiceLang>;
