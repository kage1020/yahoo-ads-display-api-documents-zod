import { z } from 'zod';

import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';
import { AdGroupAdServiceCustomParameter } from './AdGroupAdServiceCustomParameter';

export const AdGroupAdServiceCustomParameters = z.object({
  isRemove: AdGroupAdServiceIsRemoveFlg,
  parameters: z.array(AdGroupAdServiceCustomParameter).nullable()
}).nullable();

export type AdGroupAdServiceCustomParameters = z.infer<typeof AdGroupAdServiceCustomParameters>;
