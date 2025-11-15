import { z } from 'zod';

import { error } from '../../common/Error';
import { dictionaryServiceSharedAudienceListInfo } from './DictionaryServiceSharedAudienceListInfo';

export const dictionaryServiceSharedAudienceListInfoValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedAudienceList: dictionaryServiceSharedAudienceListInfo
}).nullable();

export type DictionaryServiceSharedAudienceListInfoValue = z.infer<typeof dictionaryServiceSharedAudienceListInfoValue>;
