import { z } from 'zod';

import { MediaServiceValue } from './MediaServiceValue';

export const MediaServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(MediaServiceValue).nullable()
}).nullable();

export type MediaServicePage = z.infer<typeof MediaServicePage>;
