import { z } from 'zod';

export const mediaServiceDownloadSelector = z.object({
  accountId: z.number().int(),
  mediaId: z.number().int()
}).nullable();

export type MediaServiceDownloadSelector = z.infer<typeof mediaServiceDownloadSelector>;
