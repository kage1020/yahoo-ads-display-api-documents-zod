import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceSharedAudienceListMaster } from './DictionaryServiceSharedAudienceListMaster';

export const DictionaryServiceSharedAudienceListMasterValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedAudienceListMaster: DictionaryServiceSharedAudienceListMaster
}).nullable();

export type DictionaryServiceSharedAudienceListMasterValue = z.infer<typeof DictionaryServiceSharedAudienceListMasterValue>;
