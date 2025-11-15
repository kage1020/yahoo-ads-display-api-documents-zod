import { z } from 'zod';

export const accountServiceAutoTaggingEnabled = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountServiceAutoTaggingEnabled = z.infer<typeof accountServiceAutoTaggingEnabled>;
