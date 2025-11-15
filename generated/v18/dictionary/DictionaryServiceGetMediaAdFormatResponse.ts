import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceMediaAdFormatPage } from './DictionaryServiceMediaAdFormatPage';

export const dictionaryServiceGetMediaAdFormatResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceMediaAdFormatPage
}).nullable();

export type DictionaryServiceGetMediaAdFormatResponse = z.infer<typeof dictionaryServiceGetMediaAdFormatResponse>;
