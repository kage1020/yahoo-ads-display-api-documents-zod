import { z } from 'zod';

import { adGroupTarget } from './AdGroupTarget';
import { error } from '../../common/Error';

export const adGroupTargetServiceValue = z.object({
  adGroupTargetList: adGroupTarget,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupTargetServiceValue = z.infer<typeof adGroupTargetServiceValue>;
