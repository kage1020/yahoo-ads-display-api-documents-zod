import { z } from 'zod';

export const retargetingTagServiceOperation = z.object({
  accountId: z.number().int()
}).nullable();

export type RetargetingTagServiceOperation = z.infer<typeof retargetingTagServiceOperation>;
