import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceOsVersionPage } from './DictionaryServiceOsVersionPage';

export const DictionaryServiceGetOsVersionResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceOsVersionPage
}).nullable();

export type DictionaryServiceGetOsVersionResponse = z.infer<typeof DictionaryServiceGetOsVersionResponse>;
