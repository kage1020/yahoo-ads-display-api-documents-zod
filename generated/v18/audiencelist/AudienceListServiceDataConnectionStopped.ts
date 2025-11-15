import { z } from 'zod';

export const AudienceListServiceDataConnectionStopped = z.enum(["TRUE", "FALSE", "UNKNOWN"]).nullable();

export type AudienceListServiceDataConnectionStopped = z.infer<typeof AudienceListServiceDataConnectionStopped>;
