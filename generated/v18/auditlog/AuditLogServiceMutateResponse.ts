import { z } from 'zod';

import { error } from '../../common/Error';
import { auditLogServiceReturnValue } from './AuditLogServiceReturnValue';

export const auditLogServiceMutateResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: auditLogServiceReturnValue
}).nullable();

export type AuditLogServiceMutateResponse = z.infer<typeof auditLogServiceMutateResponse>;
