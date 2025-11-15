import { z } from 'zod';

import { DictionaryServiceThirdPartyTrackingDomainValue } from './DictionaryServiceThirdPartyTrackingDomainValue';

export const DictionaryServiceThirdPartyTrackingDomainPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(DictionaryServiceThirdPartyTrackingDomainValue).nullable()
}).nullable();

export type DictionaryServiceThirdPartyTrackingDomainPage = z.infer<typeof DictionaryServiceThirdPartyTrackingDomainPage>;
