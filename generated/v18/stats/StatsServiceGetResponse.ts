import { z } from 'zod';

import { error } from '../../common/Error';
import { statsServicePage } from './StatsServicePage';

export const statsServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: statsServicePage
}).nullable();

export type StatsServiceGetResponse = z.infer<typeof statsServiceGetResponse>;
