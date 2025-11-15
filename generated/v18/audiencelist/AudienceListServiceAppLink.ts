import { z } from 'zod';

import { audienceListServiceAppVendor } from './AudienceListServiceAppVendor';
import { audienceListServiceAppPlatform } from './AudienceListServiceAppPlatform';

export const audienceListServiceAppLink = z.object({
  appId: z.string().nullable(),
  appVendor: audienceListServiceAppVendor,
  linkId: z.string().nullable(),
  appPlatform: audienceListServiceAppPlatform
}).nullable();

export type AudienceListServiceAppLink = z.infer<typeof audienceListServiceAppLink>;
