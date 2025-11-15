import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceThirdPartyTrackingDomain } from './DictionaryServiceThirdPartyTrackingDomain';

export const DictionaryServiceThirdPartyTrackingDomainValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  thirdPartyTrackingDomain: z.array(DictionaryServiceThirdPartyTrackingDomain).nullable()
}).nullable();

export type DictionaryServiceThirdPartyTrackingDomainValue = z.infer<typeof DictionaryServiceThirdPartyTrackingDomainValue>;
