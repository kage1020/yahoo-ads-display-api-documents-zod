import { z } from 'zod';

import { AdGroupTarget } from './AdGroupTarget';
import { Error } from './Error';

export const AdGroupTargetServiceValue = z.object({
  adGroupTargetList: AdGroupTarget,
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type AdGroupTargetServiceValue = z.infer<typeof AdGroupTargetServiceValue>;
