import { z } from 'zod';

export const audienceListServiceDeliveryStatus = z.enum(["ACTIVE", "PAUSED", "UNKNOWN"]).nullable();

export type AudienceListServiceDeliveryStatus = z.infer<typeof audienceListServiceDeliveryStatus>;
