import { z } from 'zod';

import { auditLogServiceJob } from './AuditLogServiceJob';
import { error } from '../../common/Error';

export const auditLogServiceValue = z.object({
  auditLogJob: auditLogServiceJob,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AuditLogServiceValue = z.infer<typeof auditLogServiceValue>;
