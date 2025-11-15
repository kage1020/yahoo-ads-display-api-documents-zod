import { z } from 'zod';

import { AudienceListServiceCompareOperator } from './AudienceListServiceCompareOperator';
import { AudienceListServiceRuleType } from './AudienceListServiceRuleType';

export const AudienceListServiceRuleCondition = z.object({
  compareOperator: AudienceListServiceCompareOperator,
  ruleType: AudienceListServiceRuleType,
  value: z.string().nullable()
}).nullable();

export type AudienceListServiceRuleCondition = z.infer<typeof AudienceListServiceRuleCondition>;
