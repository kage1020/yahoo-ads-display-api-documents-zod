import { z } from 'zod';

import { auditLogServiceDateRange } from './AuditLogServiceDateRange';
import { auditLogServiceEncoding } from './AuditLogServiceEncoding';
import { auditLogServiceJobStatus } from './AuditLogServiceJobStatus';
import { auditLogServiceLang } from './AuditLogServiceLang';
import { auditLogServiceOutput } from './AuditLogServiceOutput';
import { auditLogServiceSourceType } from './AuditLogServiceSourceType';

export const auditLogServiceJob = z.object({
  accountId: z.number().int().nullable(),
  auditLogJobEndDate: z.string().nullable(),
  auditLogJobId: z.number().int().nullable(),
  auditLogJobName: z.string().nullable(),
  auditLogJobStartDate: z.string().nullable(),
  auditLogJobUserName: z.string().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  dateRange: auditLogServiceDateRange,
  encoding: auditLogServiceEncoding,
  jobStatus: auditLogServiceJobStatus,
  lang: auditLogServiceLang,
  output: auditLogServiceOutput,
  progress: z.number().int().nullable(),
  sourceType: auditLogServiceSourceType
}).nullable();

export type AuditLogServiceJob = z.infer<typeof auditLogServiceJob>;
