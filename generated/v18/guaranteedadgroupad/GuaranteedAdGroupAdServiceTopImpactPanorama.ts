import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const guaranteedAdGroupAdServiceTopImpactPanorama = z.object({
  displayUrl: z.string().nullable(),
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  adLeftSideMediaId: z.number().int().nullable(),
  adRightSideMediaId: z.number().int().nullable(),
  adShrinkMainMediaId: z.number().int().nullable(),
  thumbnailMediaId: z.number().int().nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactPanorama = z.infer<typeof guaranteedAdGroupAdServiceTopImpactPanorama>;
