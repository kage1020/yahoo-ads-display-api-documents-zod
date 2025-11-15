import { z } from 'zod';

export const Feed = z.object({
  accountId: z.number().int().nullable(),
  feedId: z.number().int().nullable(),
  feedName: z.string().nullable(),
  itemCount: z.number().int().nullable(),
  approvedItemCount: z.number().int().nullable(),
  disApprovedItemCount: z.number().int().nullable()
}).nullable();

export type Feed = z.infer<typeof Feed>;
