import { z } from 'zod';

export const AudienceListServiceIsCurrentlyTotaling = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceIsCurrentlyTotaling = z.infer<typeof AudienceListServiceIsCurrentlyTotaling>;
