import { z } from 'zod';

import { adGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { adGroupAdServiceMainMediaFormat } from './AdGroupAdServiceMainMediaFormat';
import { adGroupAdServiceBannerAd } from './AdGroupAdServiceBannerAd';
import { adGroupAdServiceCarouselAd } from './AdGroupAdServiceCarouselAd';
import { adGroupAdServiceDynamicDisplayAd } from './AdGroupAdServiceDynamicDisplayAd';
import { adGroupAdServiceResponsiveAd } from './AdGroupAdServiceResponsiveAd';
import { adGroupAdServiceTextAd } from './AdGroupAdServiceTextAd';
import { adGroupAdServiceResponsiveGainFriendsAd } from './AdGroupAdServiceResponsiveGainFriendsAd';
import { adGroupAdServiceCarouselGainFriendsAd } from './AdGroupAdServiceCarouselGainFriendsAd';
import { adGroupAdServiceInstreamAd } from './AdGroupAdServiceInstreamAd';
import { adGroupAdServiceCustomParameters } from './AdGroupAdServiceCustomParameters';
import { adGroupAdServiceDisplayUrlLevel } from './AdGroupAdServiceDisplayUrlLevel';
import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';

export const adGroupAdServiceAd = z.object({
  adType: adGroupAdServiceAdType,
  mainMediaFormat: adGroupAdServiceMainMediaFormat,
  bannerAd: adGroupAdServiceBannerAd,
  carouselAd: adGroupAdServiceCarouselAd,
  dynamicDisplayAd: adGroupAdServiceDynamicDisplayAd,
  responsiveAd: adGroupAdServiceResponsiveAd,
  textAd: adGroupAdServiceTextAd,
  responsiveGainFriendsAd: adGroupAdServiceResponsiveGainFriendsAd,
  carouselGainFriendsAd: adGroupAdServiceCarouselGainFriendsAd,
  instreamAd: adGroupAdServiceInstreamAd,
  customParameters: adGroupAdServiceCustomParameters,
  displayUrl: z.string().nullable(),
  displayUrlLevel: adGroupAdServiceDisplayUrlLevel,
  finalUrl: z.string().nullable(),
  smartphoneFinalUrl: z.string().nullable(),
  isRemoveSmartphoneFinalUrl: adGroupAdServiceIsRemoveFlg,
  trackingUrl: z.string().nullable(),
  isRemoveTrackingUrl: adGroupAdServiceIsRemoveFlg
}).nullable();

export type AdGroupAdServiceAd = z.infer<typeof adGroupAdServiceAd>;
