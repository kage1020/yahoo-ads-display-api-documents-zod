import { z } from 'zod';

import { GuaranteedAdGroupAdServiceIsRemoveFlg } from './GuaranteedAdGroupAdServiceIsRemoveFlg';
import { GuaranteedAdGroupAdServiceCustomParameter } from './GuaranteedAdGroupAdServiceCustomParameter';

export const GuaranteedAdGroupAdServiceCustomParameters = z.object({
  isRemove: GuaranteedAdGroupAdServiceIsRemoveFlg,
  parameters: z.array(GuaranteedAdGroupAdServiceCustomParameter).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCustomParameters = z.infer<typeof GuaranteedAdGroupAdServiceCustomParameters>;
