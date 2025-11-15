import { z } from 'zod';

export const audienceListServiceIsPreset = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsPreset = z.infer<typeof audienceListServiceIsPreset>;
