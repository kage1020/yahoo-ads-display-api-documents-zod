import { z } from 'zod';

export const AuditLogServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  auditLogJobId: z.number().int()
}).nullable();

export type AuditLogServiceDownloadSelector = z.infer<typeof AuditLogServiceDownloadSelector>;
