import { z } from 'zod';

export const AudienceListServiceUnavailableKeyword = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceUnavailableKeyword = z.infer<typeof AudienceListServiceUnavailableKeyword>;
