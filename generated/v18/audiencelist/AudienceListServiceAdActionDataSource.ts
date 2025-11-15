import { z } from 'zod';

import { audienceListServiceEntity } from './AudienceListServiceEntity';

export const audienceListServiceAdActionDataSource = z.object({
  entity: audienceListServiceEntity,
  ids: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type AudienceListServiceAdActionDataSource = z.infer<typeof audienceListServiceAdActionDataSource>;
