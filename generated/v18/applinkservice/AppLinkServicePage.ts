import { z } from 'zod';

import { appLinkServiceValue } from './AppLinkServiceValue';

export const appLinkServicePage = z.object({
  values: z.array(appLinkServiceValue).nullable(),
  totalNumEntries: z.number().int()
}).nullable();

export type AppLinkServicePage = z.infer<typeof appLinkServicePage>;
