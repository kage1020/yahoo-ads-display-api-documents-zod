import { z } from 'zod';

import { AuditLogServiceJob } from './AuditLogServiceJob';
import { Error } from './Error';

export const AuditLogServiceValue = z.object({
  auditLogJob: AuditLogServiceJob,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AuditLogServiceValue = z.infer<typeof AuditLogServiceValue>;
