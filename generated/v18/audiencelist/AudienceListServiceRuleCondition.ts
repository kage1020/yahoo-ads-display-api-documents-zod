import { z } from 'zod';

import { audienceListServiceCompareOperator } from './AudienceListServiceCompareOperator';
import { audienceListServiceRuleType } from './AudienceListServiceRuleType';

export const audienceListServiceRuleCondition = z.object({
  compareOperator: audienceListServiceCompareOperator,
  ruleType: audienceListServiceRuleType,
  value: z.string().nullable()
}).nullable();

export type AudienceListServiceRuleCondition = z.infer<typeof audienceListServiceRuleCondition>;
