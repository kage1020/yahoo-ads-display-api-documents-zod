import { z } from 'zod';

export const audienceListServiceUnavailableUrl = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceUnavailableUrl = z.infer<typeof audienceListServiceUnavailableUrl>;
