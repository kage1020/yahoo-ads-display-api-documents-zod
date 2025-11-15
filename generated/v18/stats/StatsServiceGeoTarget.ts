import { z } from 'zod';

import { StatsServiceAreaSearchType } from './StatsServiceAreaSearchType';

export const StatsServiceGeoTarget = z.object({
  areaSearchType: StatsServiceAreaSearchType,
  latitudeInMicroDegrees: z.number().int().nullable(),
  longitudeInMicroDegrees: z.number().int().nullable(),
  radius: z.number().int().nullable(),
  description: z.string().nullable(),
  geoNameEn: z.string().nullable(),
  geoNameJa: z.string().nullable()
}).nullable();

export type StatsServiceGeoTarget = z.infer<typeof StatsServiceGeoTarget>;
