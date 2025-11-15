import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingTagServicePage } from './RetargetingTagServicePage';

export const retargetingTagServiceGetResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: retargetingTagServicePage
}).nullable();

export type RetargetingTagServiceGetResponse = z.infer<typeof retargetingTagServiceGetResponse>;
