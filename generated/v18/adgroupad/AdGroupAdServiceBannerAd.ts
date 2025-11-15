import { z } from 'zod';

import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const adGroupAdServiceBannerAd = z.object({
  isRemoveVideo10SecBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo25PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo3SecBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo50PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo75PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideoCompleteBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideoStartBeaconUrls: adGroupAdServiceIsRemoveFlg,
  thumbnailMediaId: z.number().int().nullable(),
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceBannerAd = z.infer<typeof adGroupAdServiceBannerAd>;
