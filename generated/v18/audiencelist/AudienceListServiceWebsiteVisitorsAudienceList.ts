import { z } from 'zod';

import { audienceListServiceIsOpen } from './AudienceListServiceIsOpen';
import { audienceListServiceIsPreset } from './AudienceListServiceIsPreset';
import { audienceListServiceRule } from './AudienceListServiceRule';

export const audienceListServiceWebsiteVisitorsAudienceList = z.object({
  isOpen: audienceListServiceIsOpen,
  isPreset: audienceListServiceIsPreset,
  dataDuration: z.number().int().nullable(),
  retargetingTagId: z.string().nullable(),
  rules: z.array(audienceListServiceRule).nullable()
}).nullable();

export type AudienceListServiceWebsiteVisitorsAudienceList = z.infer<typeof audienceListServiceWebsiteVisitorsAudienceList>;
