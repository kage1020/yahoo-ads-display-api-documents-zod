import { z } from 'zod';

export const AuditLogServiceEncoding = z.enum(["SJIS", "UTF8", "UTF8_BOM", "UTF16LE", "UNKNOWN"]).nullable();

export type AuditLogServiceEncoding = z.infer<typeof AuditLogServiceEncoding>;
