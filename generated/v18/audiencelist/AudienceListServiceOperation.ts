import { z } from 'zod';

import { audienceList } from './AudienceList';

export const audienceListServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(audienceList)
}).nullable();

export type AudienceListServiceOperation = z.infer<typeof audienceListServiceOperation>;
