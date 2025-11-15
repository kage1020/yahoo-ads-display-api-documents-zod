import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const guaranteedAdGroupAdServiceTopImpactTheater = z.object({
  displayUrl: z.string().nullable(),
  thumbnailMediaId: z.number().int().nullable(),
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable(),
  adLeftSideMediaId: z.number().int().nullable(),
  adRightSideMediaId: z.number().int().nullable(),
  adCenterMediaId: z.number().int().nullable(),
  videoScreenshot: z.array(z.string().nullable()).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceTopImpactTheater = z.infer<typeof guaranteedAdGroupAdServiceTopImpactTheater>;
