import { z } from 'zod';

import { dictionaryServiceThirdPartyTrackingDomainValue } from './DictionaryServiceThirdPartyTrackingDomainValue';

export const dictionaryServiceThirdPartyTrackingDomainPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(dictionaryServiceThirdPartyTrackingDomainValue).nullable()
}).nullable();

export type DictionaryServiceThirdPartyTrackingDomainPage = z.infer<typeof dictionaryServiceThirdPartyTrackingDomainPage>;
