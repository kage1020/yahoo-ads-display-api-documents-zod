import { z } from 'zod';

export const mediaServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type MediaServiceCreatedDateRange = z.infer<typeof mediaServiceCreatedDateRange>;
