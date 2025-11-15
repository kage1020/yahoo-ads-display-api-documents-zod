import { z } from 'zod';

import { AppLinkServiceValue } from './AppLinkServiceValue';

export const AppLinkServicePage = z.object({
  values: z.array(AppLinkServiceValue).nullable(),
  totalNumEntries: z.number().int()
}).nullable();

export type AppLinkServicePage = z.infer<typeof AppLinkServicePage>;
