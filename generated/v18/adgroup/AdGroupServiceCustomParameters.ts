import { z } from 'zod';

import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { adGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const adGroupServiceCustomParameters = z.object({
  isRemove: adGroupServiceIsRemoveFlg,
  parameters: z.array(adGroupServiceCustomParameter).nullable()
}).nullable();

export type AdGroupServiceCustomParameters = z.infer<typeof adGroupServiceCustomParameters>;
