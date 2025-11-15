import { z } from 'zod';

export const audienceListServiceIsZeroOrCurrentlyTotaling = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsZeroOrCurrentlyTotaling = z.infer<typeof audienceListServiceIsZeroOrCurrentlyTotaling>;
