import { z } from 'zod';

import { reportDefinitionServiceDateRange } from './ReportDefinitionServiceDateRange';
import { reportDefinitionServiceFilter } from './ReportDefinitionServiceFilter';
import { reportDefinitionServiceReportCompressType } from './ReportDefinitionServiceReportCompressType';
import { reportDefinitionServiceReportDateRangeType } from './ReportDefinitionServiceReportDateRangeType';
import { reportDefinitionServiceReportDownloadEncode } from './ReportDefinitionServiceReportDownloadEncode';
import { reportDefinitionServiceReportDownloadFormat } from './ReportDefinitionServiceReportDownloadFormat';
import { reportDefinitionServiceReportIncludeDeleted } from './ReportDefinitionServiceReportIncludeDeleted';
import { reportDefinitionServiceReportJobStatus } from './ReportDefinitionServiceReportJobStatus';
import { reportDefinitionServiceReportLanguage } from './ReportDefinitionServiceReportLanguage';
import { reportDefinitionServiceReportSkipColumnHeader } from './ReportDefinitionServiceReportSkipColumnHeader';
import { reportDefinitionServiceReportSkipReportSummary } from './ReportDefinitionServiceReportSkipReportSummary';
import { reportDefinitionServiceReportDecimalPartDisplayType } from './ReportDefinitionServiceReportDecimalPartDisplayType';
import { reportDefinitionServiceReportTypeCondition } from './ReportDefinitionServiceReportTypeCondition';
import { reportDefinitionServiceReportSortField } from './ReportDefinitionServiceReportSortField';

export const reportDefinition = z.object({
  accountId: z.number().int().nullable(),
  completeTime: z.string().nullable(),
  dateRange: reportDefinitionServiceDateRange,
  fields: z.array(z.string().nullable()).nullable(),
  filters: z.array(reportDefinitionServiceFilter).nullable(),
  reportCompressType: reportDefinitionServiceReportCompressType,
  reportDateRangeType: reportDefinitionServiceReportDateRangeType,
  reportDownloadEncode: reportDefinitionServiceReportDownloadEncode,
  reportDownloadFormat: reportDefinitionServiceReportDownloadFormat,
  reportIncludeDeleted: reportDefinitionServiceReportIncludeDeleted,
  reportJobStatus: reportDefinitionServiceReportJobStatus,
  reportJobErrorDetail: z.string().nullable(),
  reportJobId: z.number().int().nullable(),
  reportLanguage: reportDefinitionServiceReportLanguage,
  reportName: z.string().nullable(),
  requestTime: z.string().nullable(),
  reportSkipColumnHeader: reportDefinitionServiceReportSkipColumnHeader,
  reportSkipReportSummary: reportDefinitionServiceReportSkipReportSummary,
  reportDecimalPartDisplayType: reportDefinitionServiceReportDecimalPartDisplayType,
  reportTypeCondition: reportDefinitionServiceReportTypeCondition,
  sortFields: z.array(reportDefinitionServiceReportSortField).nullable()
}).nullable();

export type ReportDefinition = z.infer<typeof reportDefinition>;
