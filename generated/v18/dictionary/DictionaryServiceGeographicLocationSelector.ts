import { z } from 'zod';

import { dictionaryServiceGeographicLocationType } from './DictionaryServiceGeographicLocationType';
import { dictionaryServiceLang } from './DictionaryServiceLang';

export const dictionaryServiceGeographicLocationSelector = z.object({
  geographicLocationType: dictionaryServiceGeographicLocationType,
  lang: dictionaryServiceLang
}).nullable();

export type DictionaryServiceGeographicLocationSelector = z.infer<typeof dictionaryServiceGeographicLocationSelector>;
