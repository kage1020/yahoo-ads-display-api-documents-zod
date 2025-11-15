import { z } from 'zod';

import { ReportDefinitionServiceFilterOperator } from './ReportDefinitionServiceFilterOperator';

export const ReportDefinitionServiceFilter = z.object({
  field: z.string().nullable(),
  filterOperator: ReportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceFilter = z.infer<typeof ReportDefinitionServiceFilter>;
