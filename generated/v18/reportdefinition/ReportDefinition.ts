import { z } from 'zod';

import { ReportDefinitionServiceDateRange } from './ReportDefinitionServiceDateRange';
import { ReportDefinitionServiceFilter } from './ReportDefinitionServiceFilter';
import { ReportDefinitionServiceReportCompressType } from './ReportDefinitionServiceReportCompressType';
import { ReportDefinitionServiceReportDateRangeType } from './ReportDefinitionServiceReportDateRangeType';
import { ReportDefinitionServiceReportDownloadEncode } from './ReportDefinitionServiceReportDownloadEncode';
import { ReportDefinitionServiceReportDownloadFormat } from './ReportDefinitionServiceReportDownloadFormat';
import { ReportDefinitionServiceReportIncludeDeleted } from './ReportDefinitionServiceReportIncludeDeleted';
import { ReportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { ReportDefinitionServiceReportLanguage } from './ReportDefinitionServiceReportLanguage';
import { ReportDefinitionServiceReportSkipColumnHeader } from './ReportDefinitionServiceReportSkipColumnHeader';
import { ReportDefinitionServiceReportSkipReportSummary } from './ReportDefinitionServiceReportSkipReportSummary';
import { ReportDefinitionServiceReportDecimalPartDisplayType } from './ReportDefinitionServiceReportDecimalPartDisplayType';
import { ReportDefinitionServiceReportTypeCondition } from './ReportDefinitionServiceReportTypeCondition';
import { ReportDefinitionServiceReportSortField } from './ReportDefinitionServiceReportSortField';

export const ReportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: ReportDefinitionServiceDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(ReportDefinitionServiceFilter).nullable(),
  reportCompressType: ReportDefinitionServiceReportCompressType,
  reportDateRangeType: ReportDefinitionServiceReportDateRangeType,
  reportDownloadEncode: ReportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: ReportDefinitionServiceReportDownloadFormat,
  reportIncludeDeleted: ReportDefinitionServiceReportIncludeDeleted,
  reportJobStatus: ReportDefinitionServiceReportJobStatus,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportLanguage: ReportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  requestTime: z.string().nullable(),
  reportSkipColumnHeader: ReportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: ReportDefinitionServiceReportSkipReportSummary,
  reportDecimalPartDisplayType: ReportDefinitionServiceReportDecimalPartDisplayType,
  reportTypeCondition: ReportDefinitionServiceReportTypeCondition,
  sortFields: z.array(ReportDefinitionServiceReportSortField).nullable()
}).nullable();

export type ReportDefinition = z.infer<typeof ReportDefinition>;
