import { z } from 'zod';

import { dictionaryServiceMediaAdFormatValue } from './DictionaryServiceMediaAdFormatValue';

export const dictionaryServiceMediaAdFormatPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceMediaAdFormatValue).nullable()
}).nullable();

export type DictionaryServiceMediaAdFormatPage = z.infer<typeof dictionaryServiceMediaAdFormatPage>;
