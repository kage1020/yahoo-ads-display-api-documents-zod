import { z } from 'zod';

export const FeedDataServiceFileUploadDateRange = z.object({
  endDate: z.string().nullable(),
  startDate: z.string().nullable()
}).nullable();

export type FeedDataServiceFileUploadDateRange = z.infer<typeof FeedDataServiceFileUploadDateRange>;
