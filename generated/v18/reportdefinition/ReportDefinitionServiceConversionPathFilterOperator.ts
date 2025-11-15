import { z } from 'zod';

export const reportDefinitionServiceConversionPathFilterOperator = z.enum(["EQUALS", "NOT_EQUALS", "CONTAINS", "NOT_CONTAINS", "START_WITH", "END_WITH", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceConversionPathFilterOperator = z.infer<typeof reportDefinitionServiceConversionPathFilterOperator>;
