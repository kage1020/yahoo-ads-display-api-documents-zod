import { z } from 'zod';

import { audienceListServiceSize } from './AudienceListServiceSize';

export const audienceListServiceSizeReaches = z.object({
  reach: z.number().int().nullable(),
  audienceListSize: audienceListServiceSize
}).nullable();

export type AudienceListServiceSizeReaches = z.infer<typeof audienceListServiceSizeReaches>;
