import { z } from 'zod';

import { error } from '../../common/Error';
import { reportDefinitionServiceFieldAttribute } from './ReportDefinitionServiceFieldAttribute';

export const reportDefinitionServiceFieldValue = z.object({
  errors: z.array(error).nullable(),
  fields: z.array(reportDefinitionServiceFieldAttribute).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type ReportDefinitionServiceFieldValue = z.infer<typeof reportDefinitionServiceFieldValue>;
