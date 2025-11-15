import { z } from 'zod';

import { AudienceListServiceAppVendor } from './AudienceListServiceAppVendor';
import { AudienceListServiceAppPlatform } from './AudienceListServiceAppPlatform';

export const AudienceListServiceAppLink = z.object({
  appId: z.string().nullable(),
  appVendor: AudienceListServiceAppVendor,
  linkId: z.string().nullable(),
  appPlatform: AudienceListServiceAppPlatform
}).nullable();

export type AudienceListServiceAppLink = z.infer<typeof AudienceListServiceAppLink>;
