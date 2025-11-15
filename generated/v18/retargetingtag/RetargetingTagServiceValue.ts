import { z } from 'zod';

import { Error } from './Error';
import { RetargetingTag } from './RetargetingTag';

export const RetargetingTagServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  retargetingTag: RetargetingTag
}).nullable();

export type RetargetingTagServiceValue = z.infer<typeof RetargetingTagServiceValue>;
