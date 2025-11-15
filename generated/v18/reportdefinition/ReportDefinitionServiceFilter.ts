import { z } from 'zod';

import { reportDefinitionServiceFilterOperator } from './ReportDefinitionServiceFilterOperator';

export const reportDefinitionServiceFilter = z.object({
  field: z.string().nullable(),
  filterOperator: reportDefinitionServiceFilterOperator,
  values: z.array(z.string().nullable()).nullable()
}).nullable();

export type ReportDefinitionServiceFilter = z.infer<typeof reportDefinitionServiceFilter>;
