import { z } from 'zod';

export const auditLogServiceJobStatus = z.enum(["IN_PROGRESS", "COMPLETED", "OVER_COUNT_ERROR", "SYSTEM_ERROR", "UNKNOWN"]).nullable();

export type AuditLogServiceJobStatus = z.infer<typeof auditLogServiceJobStatus>;
