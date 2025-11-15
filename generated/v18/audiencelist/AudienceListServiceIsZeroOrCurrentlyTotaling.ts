import { z } from 'zod';

export const AudienceListServiceIsZeroOrCurrentlyTotaling = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsZeroOrCurrentlyTotaling = z.infer<typeof AudienceListServiceIsZeroOrCurrentlyTotaling>;
