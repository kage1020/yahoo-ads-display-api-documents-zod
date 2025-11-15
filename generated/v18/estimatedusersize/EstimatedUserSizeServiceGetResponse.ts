import { z } from 'zod';

import { Error } from './Error';
import { EstimatedUserSizeServicePage } from './EstimatedUserSizeServicePage';

export const EstimatedUserSizeServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: EstimatedUserSizeServicePage
}).nullable();

export type EstimatedUserSizeServiceGetResponse = z.infer<typeof EstimatedUserSizeServiceGetResponse>;
