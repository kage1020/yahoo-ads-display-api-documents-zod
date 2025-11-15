import { z } from 'zod';

export const EstimatedUserSizeServiceSelector = z.object({
  keywords: z.array(z.string().nullable()).nullable(),
  urls: z.array(z.string().nullable()).nullable()
}).nullable();

export type EstimatedUserSizeServiceSelector = z.infer<typeof EstimatedUserSizeServiceSelector>;
