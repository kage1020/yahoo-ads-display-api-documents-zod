import { z } from 'zod';

import { adGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { adGroupAdServiceCarouselGainFriends } from './AdGroupAdServiceCarouselGainFriends';

export const adGroupAdServiceCarouselGainFriendsAd = z.object({
  buttonText: adGroupAdServiceButtonText,
  carousels: z.array(adGroupAdServiceCarouselGainFriends).nullable()
}).nullable();

export type AdGroupAdServiceCarouselGainFriendsAd = z.infer<typeof adGroupAdServiceCarouselGainFriendsAd>;
