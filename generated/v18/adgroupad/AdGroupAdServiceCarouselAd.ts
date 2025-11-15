import { z } from 'zod';

import { AdGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { AdGroupAdServiceCarousel } from './AdGroupAdServiceCarousel';

export const AdGroupAdServiceCarouselAd = z.object({
  buttonText: AdGroupAdServiceButtonText,
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  carousels: z.array(AdGroupAdServiceCarousel).nullable()
}).nullable();

export type AdGroupAdServiceCarouselAd = z.infer<typeof AdGroupAdServiceCarouselAd>;
