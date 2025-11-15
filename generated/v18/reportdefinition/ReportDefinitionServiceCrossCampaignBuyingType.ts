import { z } from 'zod';

export const ReportDefinitionServiceCrossCampaignBuyingType = z.enum(["AUCTION", "GUARANTEED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceCrossCampaignBuyingType = z.infer<typeof ReportDefinitionServiceCrossCampaignBuyingType>;
