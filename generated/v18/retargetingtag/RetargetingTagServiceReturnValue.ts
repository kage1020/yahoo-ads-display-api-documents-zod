import { z } from 'zod';

import { retargetingTagServiceValue } from './RetargetingTagServiceValue';

export const retargetingTagServiceReturnValue = z.object({
  values: z.array(retargetingTagServiceValue).nullable()
}).nullable();

export type RetargetingTagServiceReturnValue = z.infer<typeof retargetingTagServiceReturnValue>;
