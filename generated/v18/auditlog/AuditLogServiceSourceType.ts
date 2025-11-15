import { z } from 'zod';

export const auditLogServiceSourceType = z.enum(["CAMPAIGN_MANAGEMENT_TOOL", "API", "YAHOO_JAPAN", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceSourceType = z.infer<typeof auditLogServiceSourceType>;
