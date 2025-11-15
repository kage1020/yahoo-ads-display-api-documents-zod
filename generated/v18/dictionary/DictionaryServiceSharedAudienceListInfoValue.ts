import { z } from 'zod';

import { Error } from './Error';
import { DictionaryServiceSharedAudienceListInfo } from './DictionaryServiceSharedAudienceListInfo';

export const DictionaryServiceSharedAudienceListInfoValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  sharedAudienceList: DictionaryServiceSharedAudienceListInfo
}).nullable();

export type DictionaryServiceSharedAudienceListInfoValue = z.infer<typeof DictionaryServiceSharedAudienceListInfoValue>;
