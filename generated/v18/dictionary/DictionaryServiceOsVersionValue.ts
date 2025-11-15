import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceOsVersion } from './DictionaryServiceOsVersion';

export const dictionaryServiceOsVersionValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  osVersion: z.array(dictionaryServiceOsVersion).nullable()
}).nullable();

export type DictionaryServiceOsVersionValue = z.infer<typeof dictionaryServiceOsVersionValue>;
