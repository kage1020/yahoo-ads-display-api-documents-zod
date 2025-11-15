import { z } from 'zod';

import { guaranteedAdGroupAdServiceAdType } from './GuaranteedAdGroupAdServiceAdType';
import { guaranteedAdGroupAdServiceMainMediaFormat } from './GuaranteedAdGroupAdServiceMainMediaFormat';
import { guaranteedAdGroupAdServiceBannerAd } from './GuaranteedAdGroupAdServiceBannerAd';
import { guaranteedAdGroupAdServiceCarouselAd } from './GuaranteedAdGroupAdServiceCarouselAd';
import { guaranteedAdGroupAdServiceInstreamAd } from './GuaranteedAdGroupAdServiceInstreamAd';
import { guaranteedAdGroupAdServiceBrandPanelQuintie } from './GuaranteedAdGroupAdServiceBrandPanelQuintie';
import { guaranteedAdGroupAdServiceBrandPanelPanorama } from './GuaranteedAdGroupAdServiceBrandPanelPanorama';
import { guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd } from './GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd';
import { guaranteedAdGroupAdServiceBrandPanelTopCover } from './GuaranteedAdGroupAdServiceBrandPanelTopCover';
import { guaranteedAdGroupAdServiceTopImpactSquare } from './GuaranteedAdGroupAdServiceTopImpactSquare';
import { guaranteedAdGroupAdServiceTopImpactQuintie } from './GuaranteedAdGroupAdServiceTopImpactQuintie';
import { guaranteedAdGroupAdServiceTopImpactTheater } from './GuaranteedAdGroupAdServiceTopImpactTheater';
import { guaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble } from './GuaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble';
import { guaranteedAdGroupAdServiceTopImpactPanorama } from './GuaranteedAdGroupAdServiceTopImpactPanorama';
import { guaranteedAdGroupAdServiceTopImpactPanoramaSideVision } from './GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision';
import { guaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch } from './GuaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch';
import { guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd } from './GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd';
import { guaranteedAdGroupAdServiceTopPageTopicsPRAd } from './GuaranteedAdGroupAdServiceTopPageTopicsPRAd';
import { guaranteedAdGroupAdServiceTalkHeadViewAd } from './GuaranteedAdGroupAdServiceTalkHeadViewAd';

export const guaranteedAdGroupAdServiceAd = z.object({
  adType: guaranteedAdGroupAdServiceAdType,
  mainMediaFormat: guaranteedAdGroupAdServiceMainMediaFormat,
  bannerAd: guaranteedAdGroupAdServiceBannerAd,
  carouselAd: guaranteedAdGroupAdServiceCarouselAd,
  instreamAd: guaranteedAdGroupAdServiceInstreamAd,
  brandPanelQuintie: guaranteedAdGroupAdServiceBrandPanelQuintie,
  brandPanelPanorama: guaranteedAdGroupAdServiceBrandPanelPanorama,
  brandPanelPanoramaPanelSwitch: guaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd,
  brandPanelTopCover: guaranteedAdGroupAdServiceBrandPanelTopCover,
  topImpactSquare: guaranteedAdGroupAdServiceTopImpactSquare,
  topImpactQuintie: guaranteedAdGroupAdServiceTopImpactQuintie,
  topImpactTheater: guaranteedAdGroupAdServiceTopImpactTheater,
  topImpactPrimeDisplayDouble: guaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble,
  topImpactPanorama: guaranteedAdGroupAdServiceTopImpactPanorama,
  topImpactPanoramaSideVision: guaranteedAdGroupAdServiceTopImpactPanoramaSideVision,
  topImpactPanoramaSideSwitch: guaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch,
  topImpactPanoramaPanelSwitch: guaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd,
  topPageTopicsPR: guaranteedAdGroupAdServiceTopPageTopicsPRAd,
  talkHeadView: guaranteedAdGroupAdServiceTalkHeadViewAd
}).nullable();

export type GuaranteedAdGroupAdServiceAd = z.infer<typeof guaranteedAdGroupAdServiceAd>;
