import { z } from 'zod';

import { audienceListServiceValue } from './AudienceListServiceValue';

export const audienceListServiceReturnValue = z.object({
  values: z.array(audienceListServiceValue).nullable()
}).nullable();

export type AudienceListServiceReturnValue = z.infer<typeof audienceListServiceReturnValue>;
