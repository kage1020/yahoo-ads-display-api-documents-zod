import { z } from 'zod';

import { dictionaryServiceOsVersionValue } from './DictionaryServiceOsVersionValue';

export const dictionaryServiceOsVersionPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceOsVersionValue).nullable()
}).nullable();

export type DictionaryServiceOsVersionPage = z.infer<typeof dictionaryServiceOsVersionPage>;
