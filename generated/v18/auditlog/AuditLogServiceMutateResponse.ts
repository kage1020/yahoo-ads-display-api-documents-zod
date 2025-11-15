import { z } from 'zod';

import { Error } from './Error';
import { AuditLogServiceReturnValue } from './AuditLogServiceReturnValue';

export const AuditLogServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: AuditLogServiceReturnValue
}).nullable();

export type AuditLogServiceMutateResponse = z.infer<typeof AuditLogServiceMutateResponse>;
