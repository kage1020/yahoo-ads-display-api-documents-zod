import { z } from 'zod';

import { AudienceListServiceValue } from './AudienceListServiceValue';

export const AudienceListServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(AudienceListServiceValue).nullable()
}).nullable();

export type AudienceListServicePage = z.infer<typeof AudienceListServicePage>;
