import { z } from 'zod';

export const AudienceListServiceEntity = z.enum(["CAMPAIGN", "AD_GROUP", "AD", "UNKNOWN"]).nullable();

export type AudienceListServiceEntity = z.infer<typeof AudienceListServiceEntity>;
