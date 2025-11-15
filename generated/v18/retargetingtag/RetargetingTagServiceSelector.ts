import { z } from 'zod';

export const retargetingTagServiceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type RetargetingTagServiceSelector = z.infer<typeof retargetingTagServiceSelector>;
