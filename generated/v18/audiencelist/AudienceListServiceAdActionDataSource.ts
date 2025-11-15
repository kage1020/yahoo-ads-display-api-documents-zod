import { z } from 'zod';

import { AudienceListServiceEntity } from './AudienceListServiceEntity';

export const AudienceListServiceAdActionDataSource = z.object({
  entity: AudienceListServiceEntity,
  ids: z.array(z.number().int().nullable()).nullable()
}).nullable();

export type AudienceListServiceAdActionDataSource = z.infer<typeof AudienceListServiceAdActionDataSource>;
