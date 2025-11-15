import { z } from 'zod';

import { DictionaryServiceMediaAdFormatValue } from './DictionaryServiceMediaAdFormatValue';

export const DictionaryServiceMediaAdFormatPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceMediaAdFormatValue).nullable()
}).nullable();

export type DictionaryServiceMediaAdFormatPage = z.infer<typeof DictionaryServiceMediaAdFormatPage>;
