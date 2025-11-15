import { z } from 'zod';

export const RetargetingTagServiceOperation = z.object({
  accountId: z.number().int()
}).nullable();

export type RetargetingTagServiceOperation = z.infer<typeof RetargetingTagServiceOperation>;
