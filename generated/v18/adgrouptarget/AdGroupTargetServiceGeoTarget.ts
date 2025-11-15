import { z } from 'zod';

import { adGroupTargetServiceAreaSearchType } from './AdGroupTargetServiceAreaSearchType';

export const adGroupTargetServiceGeoTarget = z.object({
  areaSearchType: adGroupTargetServiceAreaSearchType,
  latitudeInMicroDegrees: z.number().int().nullable(),
  longitudeInMicroDegrees: z.number().int().nullable(),
  radius: z.number().int().nullable(),
  description: z.string().nullable(),
  geoNameEn: z.string().nullable(),
  geoNameJa: z.string().nullable()
}).nullable();

export type AdGroupTargetServiceGeoTarget = z.infer<typeof adGroupTargetServiceGeoTarget>;
