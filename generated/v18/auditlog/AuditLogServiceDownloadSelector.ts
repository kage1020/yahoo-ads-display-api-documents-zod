import { z } from 'zod';

export const auditLogServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  auditLogJobId: z.number().int()
}).nullable();

export type AuditLogServiceDownloadSelector = z.infer<typeof auditLogServiceDownloadSelector>;
