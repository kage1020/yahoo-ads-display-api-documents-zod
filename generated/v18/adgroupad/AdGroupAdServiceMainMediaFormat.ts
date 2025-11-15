import { z } from 'zod';

export const AdGroupAdServiceMainMediaFormat = z.enum(["IMAGE", "VIDEO", "NONE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceMainMediaFormat = z.infer<typeof AdGroupAdServiceMainMediaFormat>;
