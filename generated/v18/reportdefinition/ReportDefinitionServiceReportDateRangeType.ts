import { z } from 'zod';

export const reportDefinitionServiceReportDateRangeType = z.enum(["CUSTOM_DATE", "TODAY", "YESTERDAY", "LAST_7_DAYS", "LAST_WEEK", "LAST_BUSINESS_WEEK", "LAST_14_DAYS", "LAST_30_DAYS", "THIS_MONTH", "THIS_MONTH_EXCEPT_TODAY", "LAST_MONTH", "GUARANTEED_CAMPAIGN_PERIOD", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportDateRangeType = z.infer<typeof reportDefinitionServiceReportDateRangeType>;
