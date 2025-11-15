import { z } from 'zod';

export const VideoServiceCreatedDateRange = z.object({
  startDate: z.string().nullable(),
  endDate: z.string().nullable()
}).nullable();

export type VideoServiceCreatedDateRange = z.infer<typeof VideoServiceCreatedDateRange>;
