import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceSharedAudienceListInfoPage } from './DictionaryServiceSharedAudienceListInfoPage';

export const DictionaryServiceGetSharedAudienceListInfoResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: DictionaryServiceSharedAudienceListInfoPage
}).nullable();

export type DictionaryServiceGetSharedAudienceListInfoResponse = z.infer<typeof DictionaryServiceGetSharedAudienceListInfoResponse>;
