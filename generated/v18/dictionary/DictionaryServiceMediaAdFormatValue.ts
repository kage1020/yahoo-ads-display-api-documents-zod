import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceMediaAdFormat } from './DictionaryServiceMediaAdFormat';

export const DictionaryServiceMediaAdFormatValue = z.object({
  errors: z.array(Error).nullable(),
  mediaAdFormat: z.array(DictionaryServiceMediaAdFormat).nullable(),
  operationSucceeded: z.boolean().nullable()
}).nullable();

export type DictionaryServiceMediaAdFormatValue = z.infer<typeof DictionaryServiceMediaAdFormatValue>;
