import { z } from 'zod';

import { ReportDefinitionServiceCrossCampaignBuyingType } from './ReportDefinitionServiceCrossCampaignBuyingType';

export const ReportDefinitionServiceCrossCampaignBuying = z.object({
  campaignBuyingType: ReportDefinitionServiceCrossCampaignBuyingType
}).nullable();

export type ReportDefinitionServiceCrossCampaignBuying = z.infer<typeof ReportDefinitionServiceCrossCampaignBuying>;
