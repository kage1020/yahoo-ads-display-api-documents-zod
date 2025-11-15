import { z } from 'zod';

export const FeedDataServiceOutput = z.enum(["TSV", "CSV", "UNKNOWN"]).nullable();

export type FeedDataServiceOutput = z.infer<typeof FeedDataServiceOutput>;
