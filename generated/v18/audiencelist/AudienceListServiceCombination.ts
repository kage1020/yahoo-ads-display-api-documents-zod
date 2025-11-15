import { z } from 'zod';

import { AudienceListServiceLogicalOperator } from './AudienceListServiceLogicalOperator';
import { AudienceListServiceData } from './AudienceListServiceData';

export const AudienceListServiceCombination = z.object({
  logicalOperator: AudienceListServiceLogicalOperator,
  audienceLists: z.array(AudienceListServiceData).nullable()
}).nullable();

export type AudienceListServiceCombination = z.infer<typeof AudienceListServiceCombination>;
