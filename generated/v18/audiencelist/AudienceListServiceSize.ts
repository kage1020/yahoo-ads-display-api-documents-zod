import { z } from 'zod';

export const AudienceListServiceSize = z.enum(["RATE_1", "RATE_2", "RATE_3", "RATE_4", "RATE_5", "RATE_6", "RATE_7", "RATE_8", "RATE_9", "RATE_10", "UNKNOWN"]).nullable();

export type AudienceListServiceSize = z.infer<typeof AudienceListServiceSize>;
