import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceSharedAudienceListMasterPage } from './DictionaryServiceSharedAudienceListMasterPage';

export const dictionaryServiceGetSharedAudienceListMasterResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: dictionaryServiceSharedAudienceListMasterPage
}).nullable();

export type DictionaryServiceGetSharedAudienceListMasterResponse = z.infer<typeof dictionaryServiceGetSharedAudienceListMasterResponse>;
