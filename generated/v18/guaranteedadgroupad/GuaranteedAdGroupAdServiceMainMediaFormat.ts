import { z } from 'zod';

export const GuaranteedAdGroupAdServiceMainMediaFormat = z.enum(["IMAGE", "VIDEO", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceMainMediaFormat = z.infer<typeof GuaranteedAdGroupAdServiceMainMediaFormat>;
