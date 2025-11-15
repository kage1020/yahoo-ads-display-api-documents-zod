import { z } from 'zod';

export const AudienceListServiceContainDataConnectionStopped = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceContainDataConnectionStopped = z.infer<typeof AudienceListServiceContainDataConnectionStopped>;
