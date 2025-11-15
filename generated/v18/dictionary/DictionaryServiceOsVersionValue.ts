import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceOsVersion } from './DictionaryServiceOsVersion';

export const DictionaryServiceOsVersionValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  osVersion: z.array(DictionaryServiceOsVersion).nullable()
}).nullable();

export type DictionaryServiceOsVersionValue = z.infer<typeof DictionaryServiceOsVersionValue>;
