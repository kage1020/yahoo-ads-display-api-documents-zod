import { z } from 'zod';

export const audienceListServiceDataConnectionStopped = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceDataConnectionStopped = z.infer<typeof audienceListServiceDataConnectionStopped>;
