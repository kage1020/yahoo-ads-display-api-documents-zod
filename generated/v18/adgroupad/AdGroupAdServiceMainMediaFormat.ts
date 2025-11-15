import { z } from 'zod';

export const adGroupAdServiceMainMediaFormat = z.enum(["IMAGE", "VIDEO", "NONE", "UNKNOWN"]).nullable();

export type AdGroupAdServiceMainMediaFormat = z.infer<typeof adGroupAdServiceMainMediaFormat>;
