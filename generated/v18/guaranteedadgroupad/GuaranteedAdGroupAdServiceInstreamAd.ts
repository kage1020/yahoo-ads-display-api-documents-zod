import { z } from 'zod';

import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';

export const GuaranteedAdGroupAdServiceInstreamAd = z.object({
  displayUrl: z.string().nullable(),
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  headline: z.string().nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable(),
  actionAfterAdClicks: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceInstreamAd = z.infer<typeof GuaranteedAdGroupAdServiceInstreamAd>;
