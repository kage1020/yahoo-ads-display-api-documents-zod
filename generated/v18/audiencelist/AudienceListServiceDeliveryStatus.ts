import { z } from 'zod';

export const AudienceListServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AudienceListServiceDeliveryStatus = z.infer<typeof AudienceListServiceDeliveryStatus>;
