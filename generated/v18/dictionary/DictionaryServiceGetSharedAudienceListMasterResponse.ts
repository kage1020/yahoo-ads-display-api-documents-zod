import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceSharedAudienceListMasterPage } from './DictionaryServiceSharedAudienceListMasterPage';

export const DictionaryServiceGetSharedAudienceListMasterResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceSharedAudienceListMasterPage
}).nullable();

export type DictionaryServiceGetSharedAudienceListMasterResponse = z.infer<typeof DictionaryServiceGetSharedAudienceListMasterResponse>;
