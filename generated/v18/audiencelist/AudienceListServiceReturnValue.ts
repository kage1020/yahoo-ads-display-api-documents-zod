import { z } from 'zod';

import { AudienceListServiceValue } from './AudienceListServiceValue';

export const AudienceListServiceReturnValue = z.object({
  values: z.array(AudienceListServiceValue).nullable()
}).nullable();

export type AudienceListServiceReturnValue = z.infer<typeof AudienceListServiceReturnValue>;
