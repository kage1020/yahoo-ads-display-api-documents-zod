import { z } from 'zod';

import { AudienceListServiceAdActionType } from './AudienceListServiceAdActionType';
import { AudienceListServiceVideoViewRule } from './AudienceListServiceVideoViewRule';

export const AudienceListServiceAdActionRules = z.object({
  adActionType: AudienceListServiceAdActionType,
  videoViewRule: AudienceListServiceVideoViewRule
}).nullable();

export type AudienceListServiceAdActionRules = z.infer<typeof AudienceListServiceAdActionRules>;
