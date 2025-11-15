import { z } from 'zod';

import { GuaranteedAdGroupAdServiceAdType } from './GuaranteedAdGroupAdServiceAdType';
import { GuaranteedAdGroupAdServiceMainMediaFormat } from './GuaranteedAdGroupAdServiceMainMediaFormat';
import { GuaranteedAdGroupAdServiceBannerAd } from './GuaranteedAdGroupAdServiceBannerAd';
import { GuaranteedAdGroupAdServiceCarouselAd } from './GuaranteedAdGroupAdServiceCarouselAd';
import { GuaranteedAdGroupAdServiceInstreamAd } from './GuaranteedAdGroupAdServiceInstreamAd';
import { GuaranteedAdGroupAdServiceBrandPanelQuintie } from './GuaranteedAdGroupAdServiceBrandPanelQuintie';
import { GuaranteedAdGroupAdServiceBrandPanelPanorama } from './GuaranteedAdGroupAdServiceBrandPanelPanorama';
import { GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd } from './GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd';
import { GuaranteedAdGroupAdServiceBrandPanelTopCover } from './GuaranteedAdGroupAdServiceBrandPanelTopCover';
import { GuaranteedAdGroupAdServiceTopImpactSquare } from './GuaranteedAdGroupAdServiceTopImpactSquare';
import { GuaranteedAdGroupAdServiceTopImpactQuintie } from './GuaranteedAdGroupAdServiceTopImpactQuintie';
import { GuaranteedAdGroupAdServiceTopImpactTheater } from './GuaranteedAdGroupAdServiceTopImpactTheater';
import { GuaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble } from './GuaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble';
import { GuaranteedAdGroupAdServiceTopImpactPanorama } from './GuaranteedAdGroupAdServiceTopImpactPanorama';
import { GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision } from './GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision';
import { GuaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch } from './GuaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch';
import { GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd } from './GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd';
import { GuaranteedAdGroupAdServiceTopPageTopicsPRAd } from './GuaranteedAdGroupAdServiceTopPageTopicsPRAd';
import { GuaranteedAdGroupAdServiceTalkHeadViewAd } from './GuaranteedAdGroupAdServiceTalkHeadViewAd';

export const GuaranteedAdGroupAdServiceAd = z.object({
  adType: GuaranteedAdGroupAdServiceAdType,
  mainMediaFormat: GuaranteedAdGroupAdServiceMainMediaFormat,
  bannerAd: GuaranteedAdGroupAdServiceBannerAd,
  carouselAd: GuaranteedAdGroupAdServiceCarouselAd,
  instreamAd: GuaranteedAdGroupAdServiceInstreamAd,
  brandPanelQuintie: GuaranteedAdGroupAdServiceBrandPanelQuintie,
  brandPanelPanorama: GuaranteedAdGroupAdServiceBrandPanelPanorama,
  brandPanelPanoramaPanelSwitch: GuaranteedAdGroupAdServiceBrandPanelPanoramaPanelSwitchAd,
  brandPanelTopCover: GuaranteedAdGroupAdServiceBrandPanelTopCover,
  topImpactSquare: GuaranteedAdGroupAdServiceTopImpactSquare,
  topImpactQuintie: GuaranteedAdGroupAdServiceTopImpactQuintie,
  topImpactTheater: GuaranteedAdGroupAdServiceTopImpactTheater,
  topImpactPrimeDisplayDouble: GuaranteedAdGroupAdServiceTopImpactPrimeDisplayDouble,
  topImpactPanorama: GuaranteedAdGroupAdServiceTopImpactPanorama,
  topImpactPanoramaSideVision: GuaranteedAdGroupAdServiceTopImpactPanoramaSideVision,
  topImpactPanoramaSideSwitch: GuaranteedAdGroupAdServiceTopImpactPanoramaSideSwitch,
  topImpactPanoramaPanelSwitch: GuaranteedAdGroupAdServiceTopImpactPanoramaPanelSwitchAd,
  topPageTopicsPR: GuaranteedAdGroupAdServiceTopPageTopicsPRAd,
  talkHeadView: GuaranteedAdGroupAdServiceTalkHeadViewAd
}).nullable();

export type GuaranteedAdGroupAdServiceAd = z.infer<typeof GuaranteedAdGroupAdServiceAd>;
