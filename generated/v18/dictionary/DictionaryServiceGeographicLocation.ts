import { z } from 'zod';

import { dictionaryServiceGeographicLocation } from './DictionaryServiceGeographicLocation';

export const dictionaryServiceGeographicLocation = z.object({
  child: z.array(dictionaryServiceGeographicLocation).nullable(),
  code: z.string().nullable(),
  fullName: z.string().nullable(),
  name: z.string().nullable(),
  order: z.string().nullable(),
  parent: z.string().nullable()
}).nullable();

export type DictionaryServiceGeographicLocation = z.infer<typeof dictionaryServiceGeographicLocation>;
