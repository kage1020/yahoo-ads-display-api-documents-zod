import { z } from 'zod';

import { adGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { adGroupAdServiceCarousel } from './AdGroupAdServiceCarousel';

export const adGroupAdServiceCarouselAd = z.object({
  buttonText: adGroupAdServiceButtonText,
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  carousels: z.array(adGroupAdServiceCarousel).nullable()
}).nullable();

export type AdGroupAdServiceCarouselAd = z.infer<typeof adGroupAdServiceCarouselAd>;
