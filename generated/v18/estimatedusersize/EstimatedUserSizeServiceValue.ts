import { z } from 'zod';

import { Error } from './Error';
import { EstimatedUserSize } from './EstimatedUserSize';

export const EstimatedUserSizeServiceValue = z.object({
  errors: z.array(Error).nullable(),
  estimatedUserSize: EstimatedUserSize,
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type EstimatedUserSizeServiceValue = z.infer<typeof EstimatedUserSizeServiceValue>;
