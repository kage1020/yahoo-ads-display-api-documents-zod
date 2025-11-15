import { z } from 'zod';

import { audienceListServiceAdActionType } from './AudienceListServiceAdActionType';
import { audienceListServiceVideoViewRule } from './AudienceListServiceVideoViewRule';

export const audienceListServiceAdActionRules = z.object({
  adActionType: audienceListServiceAdActionType,
  videoViewRule: audienceListServiceVideoViewRule
}).nullable();

export type AudienceListServiceAdActionRules = z.infer<typeof audienceListServiceAdActionRules>;
