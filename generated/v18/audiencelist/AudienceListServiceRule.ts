import { z } from 'zod';

import { AudienceListServiceRuleCondition } from './AudienceListServiceRuleCondition';

export const AudienceListServiceRule = z.object({
  ruleConditions: z.array(AudienceListServiceRuleCondition).nullable()
}).nullable();

export type AudienceListServiceRule = z.infer<typeof AudienceListServiceRule>;
