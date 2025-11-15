import { z } from 'zod';

import { AdGroupAdServiceButtonText } from './AdGroupAdServiceButtonText';
import { AdGroupAdServiceAsset } from './AdGroupAdServiceAsset';
import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const AdGroupAdServiceResponsiveAd = z.object({
  buttonText: AdGroupAdServiceButtonText,
  description: z.string().nullable(),
  headline: z.string().nullable(),
  logoMediaId: z.number().int().nullable(),
  principal: z.string().nullable(),
  asset: AdGroupAdServiceAsset,
  thumbnailMediaId: z.number().int().nullable(),
  isRemoveLogoMediaId: AdGroupAdServiceIsRemoveFlg,
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

export type AdGroupAdServiceResponsiveAd = z.infer<typeof AdGroupAdServiceResponsiveAd>;
