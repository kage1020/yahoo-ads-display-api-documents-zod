import { z } from 'zod';

import { adGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { adGroupAdServiceAsset } from './AdGroupAdServiceAsset';
import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const adGroupAdServiceResponsiveAd = z.object({
  buttonText: adGroupAdServiceButtonText,
  description: z.string().nullable(),
  headline: z.string().nullable(),
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  asset: adGroupAdServiceAsset,
  thumbnailMediaId: z.number().int().nullable(),
  isRemoveLogoMediaId: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo10SecBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo25PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo3SecBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo50PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideo75PercentBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideoCompleteBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveVideoStartBeaconUrls: adGroupAdServiceIsRemoveFlg,
  video10SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video25PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video3SecBeaconUrls: z.array(z.string().nullable()).nullable(),
  video50PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  video75PercentBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoCompleteBeaconUrls: z.array(z.string().nullable()).nullable(),
  videoStartBeaconUrls: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceResponsiveAd = z.infer<typeof adGroupAdServiceResponsiveAd>;
