import { z } from 'zod';

import { statsServiceAreaSearchType } from './StatsServiceAreaSearchType';

export const statsServiceGeoTarget = z.object({
  areaSearchType: statsServiceAreaSearchType,
  latitudeInMicroDegrees: z.number().int().nullable(),
  longitudeInMicroDegrees: z.number().int().nullable(),
  radius: z.number().int().nullable(),
  description: z.string().nullable(),
  geoNameEn: z.string().nullable(),
  geoNameJa: z.string().nullable()
}).nullable();

export type StatsServiceGeoTarget = z.infer<typeof statsServiceGeoTarget>;
