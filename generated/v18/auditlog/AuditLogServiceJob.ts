import { z } from 'zod';

import { AuditLogServiceDateRange } from './AuditLogServiceDateRange';
import { AuditLogServiceEncoding } from './AuditLogServiceEncoding';
import { AuditLogServiceJobStatus } from './AuditLogServiceJobStatus';
import { AuditLogServiceLang } from './AuditLogServiceLang';
import { AuditLogServiceOutput } from './AuditLogServiceOutput';
import { AuditLogServiceSourceType } from './AuditLogServiceSourceType';

export const AuditLogServiceJob = z.object({
  accountId: z.number().int().nullable(),
  auditLogJobEndDate: z.string().nullable(),
  auditLogJobId: z.number().int().nullable(),
  auditLogJobName: z.string().nullable(),
  auditLogJobStartDate: z.string().nullable(),
  auditLogJobUserName: z.string().nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  dateRange: AuditLogServiceDateRange,
  encoding: AuditLogServiceEncoding,
  jobStatus: AuditLogServiceJobStatus,
  lang: AuditLogServiceLang,
  output: AuditLogServiceOutput,
  progress: z.number().int().nullable(),
  sourceType: AuditLogServiceSourceType
}).nullable();

export type AuditLogServiceJob = z.infer<typeof AuditLogServiceJob>;
