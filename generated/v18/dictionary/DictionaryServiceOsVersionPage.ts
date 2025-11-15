import { z } from 'zod';

import { DictionaryServiceOsVersionValue } from './DictionaryServiceOsVersionValue';

export const DictionaryServiceOsVersionPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceOsVersionValue).nullable()
}).nullable();

export type DictionaryServiceOsVersionPage = z.infer<typeof DictionaryServiceOsVersionPage>;
