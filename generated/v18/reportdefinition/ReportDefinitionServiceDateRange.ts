import { z } from 'zod';

export const ReportDefinitionServiceDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type ReportDefinitionServiceDateRange = z.infer<typeof ReportDefinitionServiceDateRange>;
