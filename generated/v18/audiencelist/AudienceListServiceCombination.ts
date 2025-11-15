import { z } from 'zod';

import { audienceListServiceLogicalOperator } from './AudienceListServiceLogicalOperator';
import { audienceListServiceData } from './AudienceListServiceData';

export const audienceListServiceCombination = z.object({
  logicalOperator: audienceListServiceLogicalOperator,
  audienceLists: z.array(audienceListServiceData).nullable()
}).nullable();

export type AudienceListServiceCombination = z.infer<typeof audienceListServiceCombination>;
