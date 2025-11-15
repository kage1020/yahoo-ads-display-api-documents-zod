import { z } from 'zod';

export const audienceListServiceContainDataConnectionStopped = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceContainDataConnectionStopped = z.infer<typeof audienceListServiceContainDataConnectionStopped>;
