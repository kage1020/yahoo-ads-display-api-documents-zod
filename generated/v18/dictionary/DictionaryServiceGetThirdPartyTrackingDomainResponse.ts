import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceThirdPartyTrackingDomainPage } from './DictionaryServiceThirdPartyTrackingDomainPage';

export const DictionaryServiceGetThirdPartyTrackingDomainResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceThirdPartyTrackingDomainPage
}).nullable();

export type DictionaryServiceGetThirdPartyTrackingDomainResponse = z.infer<typeof DictionaryServiceGetThirdPartyTrackingDomainResponse>;
