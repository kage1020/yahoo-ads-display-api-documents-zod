import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const guaranteedAdGroupAdServiceBannerAd = z.object({
  displayUrl: z.string().nullable(),
  thumbnailMediaId: z.number().int().nullable(),
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceBannerAd = z.infer<typeof guaranteedAdGroupAdServiceBannerAd>;
