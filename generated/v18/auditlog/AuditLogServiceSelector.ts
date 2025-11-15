import { z } from 'zod';

import { AuditLogServiceJobStatus } from './AuditLogServiceJobStatus';

export const AuditLogServiceSelector = z.object({
  accountId: z.number().int(),
  auditLogJobIds: z.array(z.number().int().nullable()).nullable(),
  jobStatuses: z.array(AuditLogServiceJobStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type AuditLogServiceSelector = z.infer<typeof AuditLogServiceSelector>;
