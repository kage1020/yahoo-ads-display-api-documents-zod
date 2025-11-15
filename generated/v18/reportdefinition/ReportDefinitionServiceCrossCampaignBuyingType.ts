import { z } from 'zod';

export const reportDefinitionServiceCrossCampaignBuyingType = z.enum(["AUCTION", "GUARANTEED", "UNKNOWN"]).nullable();

export type ReportDefinitionServiceCrossCampaignBuyingType = z.infer<typeof reportDefinitionServiceCrossCampaignBuyingType>;
