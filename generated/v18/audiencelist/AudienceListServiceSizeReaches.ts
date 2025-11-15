import { z } from 'zod';

import { AudienceListServiceSize } from './AudienceListServiceSize';

export const AudienceListServiceSizeReaches = z.object({
  reach: z.number().int().nullable(),
  audienceListSize: AudienceListServiceSize
}).nullable();

export type AudienceListServiceSizeReaches = z.infer<typeof AudienceListServiceSizeReaches>;
