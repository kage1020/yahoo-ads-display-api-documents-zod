import { z } from 'zod';

import { error } from '../../common/Error';
import { retargetingTag } from './RetargetingTag';

export const retargetingTagServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  retargetingTag: retargetingTag
}).nullable();

export type RetargetingTagServiceValue = z.infer<typeof retargetingTagServiceValue>;
