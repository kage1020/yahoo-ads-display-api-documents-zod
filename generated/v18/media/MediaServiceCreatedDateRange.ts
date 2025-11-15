import { z } from 'zod';

export const MediaServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type MediaServiceCreatedDateRange = z.infer<typeof MediaServiceCreatedDateRange>;
