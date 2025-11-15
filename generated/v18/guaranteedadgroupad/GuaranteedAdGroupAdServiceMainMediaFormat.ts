import { z } from 'zod';

export const guaranteedAdGroupAdServiceMainMediaFormat = z.enum(["IMAGE", "VIDEO", "UNKNOWN"]).nullable();

export type GuaranteedAdGroupAdServiceMainMediaFormat = z.infer<typeof guaranteedAdGroupAdServiceMainMediaFormat>;
