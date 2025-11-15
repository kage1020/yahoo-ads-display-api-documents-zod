import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceOsVersionPage } from './DictionaryServiceOsVersionPage';

export const dictionaryServiceGetOsVersionResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceOsVersionPage
}).nullable();

export type DictionaryServiceGetOsVersionResponse = z.infer<typeof dictionaryServiceGetOsVersionResponse>;
