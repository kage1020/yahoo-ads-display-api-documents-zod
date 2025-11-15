import { z } from 'zod';

export const RetargetingTagServiceSelector = z.object({
  accountId: z.number().int()
}).nullable();

export type RetargetingTagServiceSelector = z.infer<typeof RetargetingTagServiceSelector>;
