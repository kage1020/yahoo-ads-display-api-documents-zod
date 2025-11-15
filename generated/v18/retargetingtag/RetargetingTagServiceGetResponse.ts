import { z } from 'zod';

import { Error } from './Error';
import { RetargetingTagServicePage } from './RetargetingTagServicePage';

export const RetargetingTagServiceGetResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: RetargetingTagServicePage
}).nullable();

export type RetargetingTagServiceGetResponse = z.infer<typeof RetargetingTagServiceGetResponse>;
