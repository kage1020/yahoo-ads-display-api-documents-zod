import { z } from 'zod';

import { AudienceListServiceIsOpen } from './AudienceListServiceIsOpen';
import { AudienceListServiceIsPreset } from './AudienceListServiceIsPreset';
import { AudienceListServiceRule } from './AudienceListServiceRule';
import { AudienceListServiceAppLink } from './AudienceListServiceAppLink';

export const AudienceListServiceAppUserAudienceList = z.object({
  isOpen: AudienceListServiceIsOpen,
  isPreset: AudienceListServiceIsPreset,
  dataDuration: z.number().int().nullable(),
  rules: z.array(AudienceListServiceRule).nullable(),
  appLink: AudienceListServiceAppLink
}).nullable();

export type AudienceListServiceAppUserAudienceList = z.infer<typeof AudienceListServiceAppUserAudienceList>;
