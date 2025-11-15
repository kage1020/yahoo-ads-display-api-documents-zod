import { z } from 'zod';

export const ReportDefinitionServiceAttributionModel = z.enum(["LAST", "FIRST", "LINEAR", "POSITION_BASED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceAttributionModel = z.infer<typeof ReportDefinitionServiceAttributionModel>;
