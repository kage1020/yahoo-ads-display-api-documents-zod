import { z } from 'zod';

import { guaranteedAdGroupAdServiceIsRemoveFlg } from './GuaranteedAdGroupAdServiceIsRemoveFlg';
import { guaranteedAdGroupAdServiceCustomParameter } from './GuaranteedAdGroupAdServiceCustomParameter';

export const guaranteedAdGroupAdServiceCustomParameters = z.object({
  isRemove: guaranteedAdGroupAdServiceIsRemoveFlg,
  parameters: z.array(guaranteedAdGroupAdServiceCustomParameter).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCustomParameters = z.infer<typeof guaranteedAdGroupAdServiceCustomParameters>;
