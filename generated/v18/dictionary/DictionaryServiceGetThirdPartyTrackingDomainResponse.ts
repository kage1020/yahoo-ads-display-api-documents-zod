import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceThirdPartyTrackingDomainPage } from './DictionaryServiceThirdPartyTrackingDomainPage';

export const dictionaryServiceGetThirdPartyTrackingDomainResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceThirdPartyTrackingDomainPage
}).nullable();

export type DictionaryServiceGetThirdPartyTrackingDomainResponse = z.infer<typeof dictionaryServiceGetThirdPartyTrackingDomainResponse>;
