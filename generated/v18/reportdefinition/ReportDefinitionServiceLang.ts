import { z } from 'zod';

export const reportDefinitionServiceLang = z.enum(["JA", "EN", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceLang = z.infer<typeof reportDefinitionServiceLang>;
