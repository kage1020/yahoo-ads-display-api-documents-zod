import { z } from 'zod';

import { RecommendationServiceType } from './RecommendationServiceType';
import { RecommendationServiceCampaignBiddingStrategyToTargetCpa } from './RecommendationServiceCampaignBiddingStrategyToTargetCpa';
import { RecommendationServiceDailyBudgetOver } from './RecommendationServiceDailyBudgetOver';
import { RecommendationServiceImpsShareBudgetLossOver } from './RecommendationServiceImpsShareBudgetLossOver';
import { RecommendationServiceMaximizeConversions } from './RecommendationServiceMaximizeConversions';
import { RecommendationServiceMaximizeClicks } from './RecommendationServiceMaximizeClicks';
import { RecommendationServiceMaximizeVideoViews } from './RecommendationServiceMaximizeVideoViews';
import { RecommendationServiceMaximizeViewableImpressions } from './RecommendationServiceMaximizeViewableImpressions';
import { RecommendationServiceEnhancedCpc } from './RecommendationServiceEnhancedCpc';
import { RecommendationServiceUpdateAdCreative } from './RecommendationServiceUpdateAdCreative';
import { RecommendationServiceDuplicateTargetingSettings } from './RecommendationServiceDuplicateTargetingSettings';
import { RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize } from './RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize';
import { RecommendationServiceAdGroupsForAddingAds } from './RecommendationServiceAdGroupsForAddingAds';
import { RecommendationServiceDailyBudgetSmall } from './RecommendationServiceDailyBudgetSmall';
import { RecommendationServiceInsufficientTargeting } from './RecommendationServiceInsufficientTargeting';
import { RecommendationServiceInsufficientAdScheduleTargeting } from './RecommendationServiceInsufficientAdScheduleTargeting';
import { RecommendationServiceInsufficientConversions } from './RecommendationServiceInsufficientConversions';
import { RecommendationServiceInsufficientClicks } from './RecommendationServiceInsufficientClicks';
import { RecommendationServiceInsufficientVideoViews } from './RecommendationServiceInsufficientVideoViews';
import { RecommendationServiceCreateCampaign } from './RecommendationServiceCreateCampaign';
import { RecommendationServiceCreateAdGroup } from './RecommendationServiceCreateAdGroup';
import { RecommendationServiceCreateAd } from './RecommendationServiceCreateAd';
import { RecommendationServiceCreateResponsiveDisplayAds } from './RecommendationServiceCreateResponsiveDisplayAds';
import { RecommendationServiceTurnYourAccountOn } from './RecommendationServiceTurnYourAccountOn';
import { RecommendationServiceTurnYourAdOn } from './RecommendationServiceTurnYourAdOn';
import { RecommendationServiceInsufficientAccountBalance } from './RecommendationServiceInsufficientAccountBalance';
import { RecommendationServiceMissingPaymentSettings } from './RecommendationServiceMissingPaymentSettings';
import { RecommendationServiceAudienceListNotAccumulated } from './RecommendationServiceAudienceListNotAccumulated';
import { RecommendationServiceNotTargetingProperAudienceListAdGroup } from './RecommendationServiceNotTargetingProperAudienceListAdGroup';

export const Recommendation = z.object({
  type: RecommendationServiceType,
  optimizationScoreLift: z.number().nullable(),
  campaignBiddingStrategyToTargetCpa: RecommendationServiceCampaignBiddingStrategyToTargetCpa,
  dailyBudgetOver: RecommendationServiceDailyBudgetOver,
  impsShareBudgetLossOver: RecommendationServiceImpsShareBudgetLossOver,
  maximizeConversions: RecommendationServiceMaximizeConversions,
  maximizeClicks: RecommendationServiceMaximizeClicks,
  maximizeVideoViews: RecommendationServiceMaximizeVideoViews,
  maximizeViewableImpressions: RecommendationServiceMaximizeViewableImpressions,
  enhancedCpc: RecommendationServiceEnhancedCpc,
  updateAdCreative: RecommendationServiceUpdateAdCreative,
  duplicateTargetingSettings: RecommendationServiceDuplicateTargetingSettings,
  notOptimalAdCountCombinedAdTypeAndImageSize: RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize,
  adGroupsForAddingAds: RecommendationServiceAdGroupsForAddingAds,
  dailyBudgetSmall: RecommendationServiceDailyBudgetSmall,
  insufficientTargeting: RecommendationServiceInsufficientTargeting,
  insufficientAdScheduleTargeting: RecommendationServiceInsufficientAdScheduleTargeting,
  insufficientConversions: RecommendationServiceInsufficientConversions,
  insufficientClicks: RecommendationServiceInsufficientClicks,
  insufficientVideoViews: RecommendationServiceInsufficientVideoViews,
  createCampaign: RecommendationServiceCreateCampaign,
  createAdGroup: RecommendationServiceCreateAdGroup,
  createAd: RecommendationServiceCreateAd,
  createResponsiveDisplayAds: RecommendationServiceCreateResponsiveDisplayAds,
  turnYourAccountOn: RecommendationServiceTurnYourAccountOn,
  turnYourAdOn: RecommendationServiceTurnYourAdOn,
  insufficientAccountBalance: RecommendationServiceInsufficientAccountBalance,
  missingPaymentSettings: RecommendationServiceMissingPaymentSettings,
  audienceListNotAccumulated: RecommendationServiceAudienceListNotAccumulated,
  notTargetingProperAudienceList: RecommendationServiceNotTargetingProperAudienceListAdGroup
}).nullable();

export type Recommendation = z.infer<typeof Recommendation>;
