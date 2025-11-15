import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceMediaAdFormat } from './DictionaryServiceMediaAdFormat';

export const dictionaryServiceMediaAdFormatValue = z.object({
  errors: z.array(error).nullable(),
  mediaAdFormat: z.array(dictionaryServiceMediaAdFormat).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceMediaAdFormatValue = z.infer<typeof dictionaryServiceMediaAdFormatValue>;
