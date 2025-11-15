import { z } from 'zod';

import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision = z.object({
  displayUrl: z.string().nullable(),
  thumbnailMediaId: z.number().int().nullable(),
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable(),
  adShrinkMainMediaId: z.number().int().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision = z.infer<typeof GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision>;
