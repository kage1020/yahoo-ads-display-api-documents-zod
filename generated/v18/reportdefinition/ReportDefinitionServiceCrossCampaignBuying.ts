import { z } from 'zod';

import { reportDefinitionServiceCrossCampaignBuyingType } from './ReportDefinitionServiceCrossCampaignBuyingType';

export const reportDefinitionServiceCrossCampaignBuying = z.object({
  campaignBuyingType: reportDefinitionServiceCrossCampaignBuyingType
}).nullable();

export type ReportDefinitionServiceCrossCampaignBuying = z.infer<typeof reportDefinitionServiceCrossCampaignBuying>;
