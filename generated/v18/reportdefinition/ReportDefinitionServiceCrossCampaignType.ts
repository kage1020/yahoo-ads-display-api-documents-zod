import { z } from 'zod';

export const ReportDefinitionServiceCrossCampaignType = z.enum(["CAMPAIGN_ID", "CAMPAIGN_GOAL", "CAMPAIGN_BUYING_TYPE", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceCrossCampaignType = z.infer<typeof ReportDefinitionServiceCrossCampaignType>;
