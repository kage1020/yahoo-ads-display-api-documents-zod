import { z } from 'zod';

import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const AdGroupAdServiceBannerAd = z.object({
  isRemoveVideo10SecBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo25PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo3SecBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo50PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideo75PercentBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideoCompleteBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveVideoStartBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  thumbnailMediaId: z.number().int().nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceBannerAd = z.infer<typeof AdGroupAdServiceBannerAd>;
