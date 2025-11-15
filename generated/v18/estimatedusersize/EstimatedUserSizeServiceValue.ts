import { z } from 'zod';

import { error } from '../../common/Error';
import { estimatedUserSize } from './EstimatedUserSize';

export const estimatedUserSizeServiceValue = z.object({
  errors: z.array(error).nullable(),
  estimatedUserSize: estimatedUserSize,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type EstimatedUserSizeServiceValue = z.infer<typeof estimatedUserSizeServiceValue>;
