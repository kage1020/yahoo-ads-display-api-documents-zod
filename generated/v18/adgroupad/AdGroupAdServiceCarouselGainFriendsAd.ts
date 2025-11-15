import { z } from 'zod';

import { AdGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { AdGroupAdServiceCarouselGainFriends } from './AdGroupAdServiceCarouselGainFriends';

export const AdGroupAdServiceCarouselGainFriendsAd = z.object({
  buttonText: AdGroupAdServiceButtonText,
  carousels: z.array(AdGroupAdServiceCarouselGainFriends).nullable()
}).nullable();

export type AdGroupAdServiceCarouselGainFriendsAd = z.infer<typeof AdGroupAdServiceCarouselGainFriendsAd>;
