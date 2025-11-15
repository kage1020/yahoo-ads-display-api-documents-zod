import { z } from 'zod';

import { error } from '../../common/Error';
import { audienceList } from './AudienceList';

export const audienceListServiceValue = z.object({
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  audienceList: audienceList
}).nullable();

export type AudienceListServiceValue = z.infer<typeof audienceListServiceValue>;
