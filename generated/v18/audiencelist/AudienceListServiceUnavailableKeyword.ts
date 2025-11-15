import { z } from 'zod';

export const audienceListServiceUnavailableKeyword = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceUnavailableKeyword = z.infer<typeof audienceListServiceUnavailableKeyword>;
