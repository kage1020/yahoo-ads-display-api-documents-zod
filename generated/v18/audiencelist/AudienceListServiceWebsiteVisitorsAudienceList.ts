import { z } from 'zod';

import { AudienceListServiceIsOpen } from './AudienceListServiceIsOpen';
import { AudienceListServiceIsPreset } from './AudienceListServiceIsPreset';
import { AudienceListServiceRule } from './AudienceListServiceRule';

export const AudienceListServiceWebsiteVisitorsAudienceList = z.object({
  isOpen: AudienceListServiceIsOpen,
  isPreset: AudienceListServiceIsPreset,
  dataDuration: z.number().int().nullable(),
  retargetingTagId: z.string().nullable(),
  rules: z.array(AudienceListServiceRule).nullable()
}).nullable();

export type AudienceListServiceWebsiteVisitorsAudienceList = z.infer<typeof AudienceListServiceWebsiteVisitorsAudienceList>;
