import { z } from 'zod';

export const reportDefinitionServiceAttributionModel = z.enum(["LAST", "FIRST", "LINEAR", "POSITION_BASED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceAttributionModel = z.infer<typeof reportDefinitionServiceAttributionModel>;
