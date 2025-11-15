import { z } from 'zod';

import { GuaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { GuaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { GuaranteedAdGroupAdServiceCarousel } from './GuaranteedAdGroupAdServiceCarousel';

export const GuaranteedAdGroupAdServiceCarouselAd = z.object({
  displayUrl: z.string().nullable(),
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  customParameters: GuaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: GuaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  carousels: z.array(GuaranteedAdGroupAdServiceCarousel).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCarouselAd = z.infer<typeof GuaranteedAdGroupAdServiceCarouselAd>;
