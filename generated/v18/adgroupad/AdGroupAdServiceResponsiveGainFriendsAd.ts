import { z } from 'zod';

import { AdGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const AdGroupAdServiceResponsiveGainFriendsAd = z.object({
  buttonText: AdGroupAdServiceButtonText,
  description: z.string().nullable(),
  headline: z.string().nullable(),
  thumbnailMediaId: z.number().int().nullable(),
  isRemoveVideo10SecBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo25PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo3SecBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo50PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo75PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideoCompleteBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideoStartBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceResponsiveGainFriendsAd = z.infer<typeof AdGroupAdServiceResponsiveGainFriendsAd>;
