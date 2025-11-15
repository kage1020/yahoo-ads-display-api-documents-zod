import { z } from 'zod';

export const AuditLogServiceSourceType = z.enum(["CAMPAIGN_MANAGEMENT_TOOL", "API", "YAHOO_JAPAN", "ALL", "UNKNOWN"]).nullable();

export type AuditLogServiceSourceType = z.infer<typeof AuditLogServiceSourceType>;
