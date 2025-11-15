import { z } from 'zod';

export const audienceListServiceEntity = z.enum(["CAMPAIGN", "AD_GROUP", "AD", "UNKNOWN"]).nullable();

export type AudienceListServiceEntity = z.infer<typeof audienceListServiceEntity>;
