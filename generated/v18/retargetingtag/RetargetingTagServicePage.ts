import { z } from 'zod';

import { retargetingTagServiceValue } from './RetargetingTagServiceValue';

export const retargetingTagServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(retargetingTagServiceValue).nullable()
}).nullable();

export type RetargetingTagServicePage = z.infer<typeof retargetingTagServicePage>;
