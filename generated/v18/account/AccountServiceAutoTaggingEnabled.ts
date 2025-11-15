import { z } from 'zod';

export const AccountServiceAutoTaggingEnabled = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type AccountServiceAutoTaggingEnabled = z.infer<typeof AccountServiceAutoTaggingEnabled>;
