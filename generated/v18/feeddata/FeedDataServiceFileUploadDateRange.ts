import { z } from 'zod';

export const feedDataServiceFileUploadDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type FeedDataServiceFileUploadDateRange = z.infer<typeof feedDataServiceFileUploadDateRange>;
