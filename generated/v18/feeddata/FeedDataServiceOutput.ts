import { z } from 'zod';

export const feedDataServiceOutput = z.enum(["TSV", "CSV", "UNKNOWN"]).nullable();

export type FeedDataServiceOutput = z.infer<typeof feedDataServiceOutput>;
