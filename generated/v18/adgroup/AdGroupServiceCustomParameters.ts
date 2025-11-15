import { z } from 'zod';

import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { AdGroupServiceCustomParameter } from './AdGroupServiceCustomParameter';

export const AdGroupServiceCustomParameters = z.object({
  isRemove: AdGroupServiceIsRemoveFlg,
  parameters: z.array(AdGroupServiceCustomParameter).nullable()
}).nullable();

export type AdGroupServiceCustomParameters = z.infer<typeof AdGroupServiceCustomParameters>;
