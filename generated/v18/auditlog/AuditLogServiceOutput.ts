import { z } from 'zod';

export const AuditLogServiceOutput = z.enum(["CSV", "TSV", "EXCEL_CSV", "ZIPPED_CSV", "ZIPPED_TSV", "ZIPPED_EXCEL_CSV", "UNKNOWN"]).nullable();

export type AuditLogServiceOutput = z.infer<typeof AuditLogServiceOutput>;
