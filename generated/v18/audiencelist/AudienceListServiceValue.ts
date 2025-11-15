import { z } from 'zod';

import { Error } from './Error';
import { AudienceList } from './AudienceList';

export const AudienceListServiceValue = z.object({
  errors: z.array(Error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  audienceList: AudienceList
}).nullable();

export type AudienceListServiceValue = z.infer<typeof AudienceListServiceValue>;
