import { z } from 'zod';

import { campaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';
import { campaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const campaignServiceCustomParameters = z.object({
  isRemove: campaignServiceIsRemoveFlg,
  parameters: z.array(campaignServiceCustomParameter).nullable()
}).nullable();

export type CampaignServiceCustomParameters = z.infer<typeof campaignServiceCustomParameters>;
