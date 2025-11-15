import { z } from 'zod';

import { RetargetingTagServiceValue } from './RetargetingTagServiceValue';

export const RetargetingTagServiceReturnValue = z.object({
  values: z.array(RetargetingTagServiceValue).nullable()
}).nullable();

export type RetargetingTagServiceReturnValue = z.infer<typeof RetargetingTagServiceReturnValue>;
