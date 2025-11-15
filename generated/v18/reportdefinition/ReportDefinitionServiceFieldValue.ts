import { z } from 'zod';

import { Error } from './Error';
import { ReportDefinitionServiceFieldAttribute } from './ReportDefinitionServiceFieldAttribute';

export const ReportDefinitionServiceFieldValue = z.object({
  errors: z.array(Error).nullable(),
  fields: z.array(ReportDefinitionServiceFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ReportDefinitionServiceFieldValue = z.infer<typeof ReportDefinitionServiceFieldValue>;
