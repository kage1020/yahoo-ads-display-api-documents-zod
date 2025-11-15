import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceSharedAudienceListMaster } from './DictionaryServiceSharedAudienceListMaster';

export const dictionaryServiceSharedAudienceListMasterValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedAudienceListMaster: dictionaryServiceSharedAudienceListMaster
}).nullable();

export type DictionaryServiceSharedAudienceListMasterValue = z.infer<typeof dictionaryServiceSharedAudienceListMasterValue>;
