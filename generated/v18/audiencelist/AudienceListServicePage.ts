import { z } from 'zod';

import { audienceListServiceValue } from './AudienceListServiceValue';

export const audienceListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(audienceListServiceValue).nullable()
}).nullable();

export type AudienceListServicePage = z.infer<typeof audienceListServicePage>;
