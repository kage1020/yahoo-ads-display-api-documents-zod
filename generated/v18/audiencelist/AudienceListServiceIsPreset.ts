import { z } from 'zod';

export const AudienceListServiceIsPreset = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsPreset = z.infer<typeof AudienceListServiceIsPreset>;
