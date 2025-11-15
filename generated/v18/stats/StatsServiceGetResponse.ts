import { z } from 'zod';

import { Error } from './Error';
import { StatsServicePage } from './StatsServicePage';

export const StatsServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: StatsServicePage
}).nullable();

export type StatsServiceGetResponse = z.infer<typeof StatsServiceGetResponse>;
