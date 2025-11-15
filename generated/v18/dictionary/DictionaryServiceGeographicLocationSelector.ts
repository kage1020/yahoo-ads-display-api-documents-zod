import { z } from 'zod';

import { DictionaryServiceGeographicLocationType } from './DictionaryServiceGeographicLocationType';
import { DictionaryServiceLang } from './DictionaryServiceLang';

export const DictionaryServiceGeographicLocationSelector = z.object({
  geographicLocationType: DictionaryServiceGeographicLocationType,
  lang: DictionaryServiceLang
}).nullable();

export type DictionaryServiceGeographicLocationSelector = z.infer<typeof DictionaryServiceGeographicLocationSelector>;
