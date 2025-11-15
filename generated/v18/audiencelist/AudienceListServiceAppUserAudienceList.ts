import { z } from 'zod';

import { audienceListServiceIsOpen } from './AudienceListServiceIsOpen';
import { audienceListServiceIsPreset } from './AudienceListServiceIsPreset';
import { audienceListServiceRule } from './AudienceListServiceRule';
import { audienceListServiceAppLink } from './AudienceListServiceAppLink';

export const audienceListServiceAppUserAudienceList = z.object({
  isOpen: audienceListServiceIsOpen,
  isPreset: audienceListServiceIsPreset,
  dataDuration: z.number().int().nullable(),
  rules: z.array(audienceListServiceRule).nullable(),
  appLink: audienceListServiceAppLink
}).nullable();

export type AudienceListServiceAppUserAudienceList = z.infer<typeof audienceListServiceAppUserAudienceList>;
