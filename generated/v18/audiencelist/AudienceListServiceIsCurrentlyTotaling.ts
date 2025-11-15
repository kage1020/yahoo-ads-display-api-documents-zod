import { z } from 'zod';

export const audienceListServiceIsCurrentlyTotaling = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsCurrentlyTotaling = z.infer<typeof audienceListServiceIsCurrentlyTotaling>;
