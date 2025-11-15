import { z } from 'zod';

import { error } from '../../common/Error';
import { estimatedUserSizeServicePage } from './EstimatedUserSizeServicePage';

export const estimatedUserSizeServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: estimatedUserSizeServicePage
}).nullable();

export type EstimatedUserSizeServiceGetResponse = z.infer<typeof estimatedUserSizeServiceGetResponse>;
