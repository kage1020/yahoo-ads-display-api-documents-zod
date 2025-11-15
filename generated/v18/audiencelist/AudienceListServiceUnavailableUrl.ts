import { z } from 'zod';

export const AudienceListServiceUnavailableUrl = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceUnavailableUrl = z.infer<typeof AudienceListServiceUnavailableUrl>;
