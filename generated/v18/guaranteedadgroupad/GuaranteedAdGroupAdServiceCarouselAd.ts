import { z } from 'zod';

import { guaranteedAdGroupAdServiceCustomParameters } from './GuaranteedAdGroupAdServiceCustomParameters';
import { guaranteedAdGroupAdServiceDisplayUrlLevel } from './GuaranteedAdGroupAdServiceDisplayUrlLevel';
import { guaranteedAdGroupAdServiceCarousel } from './GuaranteedAdGroupAdServiceCarousel';

export const guaranteedAdGroupAdServiceCarouselAd = z.object({
  displayUrl: z.string().nullable(),
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  customParameters: guaranteedAdGroupAdServiceCustomParameters,
  displayUrlLevel: guaranteedAdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  carousels: z.array(guaranteedAdGroupAdServiceCarousel).nullable()
}).nullable();

export type GuaranteedAdGroupAdServiceCarouselAd = z.infer<typeof guaranteedAdGroupAdServiceCarouselAd>;
