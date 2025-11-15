import { z } from 'zod';

import { mediaServiceValue } from './MediaServiceValue';

export const mediaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(mediaServiceValue).nullable()
}).nullable();

export type MediaServicePage = z.infer<typeof mediaServicePage>;
