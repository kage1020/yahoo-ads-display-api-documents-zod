import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceThirdPartyTrackingDomain } from './DictionaryServiceThirdPartyTrackingDomain';

export const dictionaryServiceThirdPartyTrackingDomainValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  thirdPartyTrackingDomain: z.array(dictionaryServiceThirdPartyTrackingDomain).nullable()
}).nullable();

export type DictionaryServiceThirdPartyTrackingDomainValue = z.infer<typeof dictionaryServiceThirdPartyTrackingDomainValue>;
