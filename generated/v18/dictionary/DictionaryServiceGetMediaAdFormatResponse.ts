import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceMediaAdFormatPage } from './DictionaryServiceMediaAdFormatPage';

export const DictionaryServiceGetMediaAdFormatResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceMediaAdFormatPage
}).nullable();

export type DictionaryServiceGetMediaAdFormatResponse = z.infer<typeof DictionaryServiceGetMediaAdFormatResponse>;
