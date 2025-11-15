import { z } from 'zod';

import { CampaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';
import { CampaignServiceCustomParameter } from './CampaignServiceCustomParameter';

export const CampaignServiceCustomParameters = z.object({
  isRemove: CampaignServiceIsRemoveFlg,
  parameters: z.array(CampaignServiceCustomParameter).nullable()
}).nullable();

export type CampaignServiceCustomParameters = z.infer<typeof CampaignServiceCustomParameters>;
