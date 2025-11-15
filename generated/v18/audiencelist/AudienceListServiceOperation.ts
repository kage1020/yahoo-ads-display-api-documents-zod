import { z } from 'zod';

import { AudienceList } from './AudienceList';

export const AudienceListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(AudienceList)
}).nullable();

export type AudienceListServiceOperation = z.infer<typeof AudienceListServiceOperation>;
