import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceSharedAudienceListInfoPage } from './DictionaryServiceSharedAudienceListInfoPage';

export const dictionaryServiceGetSharedAudienceListInfoResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceSharedAudienceListInfoPage
}).nullable();

export type DictionaryServiceGetSharedAudienceListInfoResponse = z.infer<typeof dictionaryServiceGetSharedAudienceListInfoResponse>;
