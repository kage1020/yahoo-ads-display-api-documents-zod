import { z } from 'zod';

import { audienceListServiceRuleCondition } from './AudienceListServiceRuleCondition';

export const audienceListServiceRule = z.object({
  ruleConditions: z.array(audienceListServiceRuleCondition).nullable()
}).nullable();

export type AudienceListServiceRule = z.infer<typeof audienceListServiceRule>;
