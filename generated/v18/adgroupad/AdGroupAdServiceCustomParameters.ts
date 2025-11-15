import { z } from 'zod';

import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';
import { adGroupAdServiceCustomParameter } from './AdGroupAdServiceCustomParameter';

export const adGroupAdServiceCustomParameters = z.object({
  isRemove: adGroupAdServiceIsRemoveFlg,
  parameters: z.array(adGroupAdServiceCustomParameter).nullable()
}).nullable();

export type AdGroupAdServiceCustomParameters = z.infer<typeof adGroupAdServiceCustomParameters>;
