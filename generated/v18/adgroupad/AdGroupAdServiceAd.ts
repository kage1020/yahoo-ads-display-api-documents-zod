import { z } from 'zod';

import { AdGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { AdGroupAdServiceMainMediaFormat } from './AdGroupAdServiceMainMediaFormat';
import { AdGroupAdServiceBannerAd } from './AdGroupAdServiceBannerAd';
import { AdGroupAdServiceCarouselAd } from './AdGroupAdServiceCarouselAd';
import { AdGroupAdServiceDynamicDisplayAd } from './AdGroupAdServiceDynamicDisplayAd';
import { AdGroupAdServiceResponsiveAd } from './AdGroupAdServiceResponsiveAd';
import { AdGroupAdServiceTextAd } from './AdGroupAdServiceTextAd';
import { AdGroupAdServiceResponsiveGainFriendsAd } from './AdGroupAdServiceResponsiveGainFriendsAd';
import { AdGroupAdServiceCarouselGainFriendsAd } from './AdGroupAdServiceCarouselGainFriendsAd';
import { AdGroupAdServiceInstreamAd } from './AdGroupAdServiceInstreamAd';
import { AdGroupAdServiceCustomParameters } from './AdGroupAdServiceCustomParameters';
import { AdGroupAdServiceDisplayUrlLevel } from './AdGroupAdServiceDisplayUrlLevel';
import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const AdGroupAdServiceAd = z.object({
  adType: AdGroupAdServiceAdType,
  mainMediaFormat: AdGroupAdServiceMainMediaFormat,
  bannerAd: AdGroupAdServiceBannerAd,
  carouselAd: AdGroupAdServiceCarouselAd,
  dynamicDisplayAd: AdGroupAdServiceDynamicDisplayAd,
  responsiveAd: AdGroupAdServiceResponsiveAd,
  textAd: AdGroupAdServiceTextAd,
  responsiveGainFriendsAd: AdGroupAdServiceResponsiveGainFriendsAd,
  carouselGainFriendsAd: AdGroupAdServiceCarouselGainFriendsAd,
  instreamAd: AdGroupAdServiceInstreamAd,
  customParameters: AdGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: AdGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  isRemoveSmartphoneFinalUrl: AdGroupAdServiceIsRemoveFlg,
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: AdGroupAdServiceIsRemoveFlg
}).nullable();

export type AdGroupAdServiceAd = z.infer<typeof AdGroupAdServiceAd>;
