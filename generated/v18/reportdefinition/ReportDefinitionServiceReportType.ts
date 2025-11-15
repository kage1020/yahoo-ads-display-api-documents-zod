import { z } from 'zod';

export const ReportDefinitionServiceReportType = z.enum(["AD", "CONVERSION_PATH", "CROSS_CAMPAIGN_REACHES", "AUDIENCE_LIST_TARGET", "SEARCH_TARGET", "PLACEMENT_TARGET", "LABEL", "REACH", "URL", "MODEL_COMPARISON", "CONTENT_KEYWORD_LIST", "APP", "CAMPAIGN_BUDGET", "PORTFOLIO_BIDDING", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceReportType = z.infer<typeof ReportDefinitionServiceReportType>;
