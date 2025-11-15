import { z } from 'zod';

import { RetargetingTagServiceValue } from './RetargetingTagServiceValue';

export const RetargetingTagServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(RetargetingTagServiceValue).nullable()
}).nullable();

export type RetargetingTagServicePage = z.infer<typeof RetargetingTagServicePage>;
