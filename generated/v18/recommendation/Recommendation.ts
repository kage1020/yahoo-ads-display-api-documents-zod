import { z } from 'zod';

import { recommendationServiceType } from './RecommendationServiceType';
import { recommendationServiceCampaignBiddingStrategyToTargetCpa } from './RecommendationServiceCampaignBiddingStrategyToTargetCpa';
import { recommendationServiceDailyBudgetOver } from './RecommendationServiceDailyBudgetOver';
import { recommendationServiceImpsShareBudgetLossOver } from './RecommendationServiceImpsShareBudgetLossOver';
import { recommendationServiceMaximizeConversions } from './RecommendationServiceMaximizeConversions';
import { recommendationServiceMaximizeClicks } from './RecommendationServiceMaximizeClicks';
import { recommendationServiceMaximizeVideoViews } from './RecommendationServiceMaximizeVideoViews';
import { recommendationServiceMaximizeViewableImpressions } from './RecommendationServiceMaximizeViewableImpressions';
import { recommendationServiceEnhancedCpc } from './RecommendationServiceEnhancedCpc';
import { recommendationServiceUpdateAdCreative } from './RecommendationServiceUpdateAdCreative';
import { recommendationServiceDuplicateTargetingSettings } from './RecommendationServiceDuplicateTargetingSettings';
import { recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize } from './RecommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize';
import { recommendationServiceAdGroupsForAddingAds } from './RecommendationServiceAdGroupsForAddingAds';
import { recommendationServiceDailyBudgetSmall } from './RecommendationServiceDailyBudgetSmall';
import { recommendationServiceInsufficientTargeting } from './RecommendationServiceInsufficientTargeting';
import { recommendationServiceInsufficientAdScheduleTargeting } from './RecommendationServiceInsufficientAdScheduleTargeting';
import { recommendationServiceInsufficientConversions } from './RecommendationServiceInsufficientConversions';
import { recommendationServiceInsufficientClicks } from './RecommendationServiceInsufficientClicks';
import { recommendationServiceInsufficientVideoViews } from './RecommendationServiceInsufficientVideoViews';
import { recommendationServiceCreateCampaign } from './RecommendationServiceCreateCampaign';
import { recommendationServiceCreateAdGroup } from './RecommendationServiceCreateAdGroup';
import { recommendationServiceCreateAd } from './RecommendationServiceCreateAd';
import { recommendationServiceCreateResponsiveDisplayAds } from './RecommendationServiceCreateResponsiveDisplayAds';
import { recommendationServiceTurnYourAccountOn } from './RecommendationServiceTurnYourAccountOn';
import { recommendationServiceTurnYourAdOn } from './RecommendationServiceTurnYourAdOn';
import { recommendationServiceInsufficientAccountBalance } from './RecommendationServiceInsufficientAccountBalance';
import { recommendationServiceMissingPaymentSettings } from './RecommendationServiceMissingPaymentSettings';
import { recommendationServiceAudienceListNotAccumulated } from './RecommendationServiceAudienceListNotAccumulated';
import { recommendationServiceNotTargetingProperAudienceListAdGroup } from './RecommendationServiceNotTargetingProperAudienceListAdGroup';

export const recommendation = z.object({
  type: recommendationServiceType,
  optimizationScoreLift: z.number().nullable(),
  campaignBiddingStrategyToTargetCpa: recommendationServiceCampaignBiddingStrategyToTargetCpa,
  dailyBudgetOver: recommendationServiceDailyBudgetOver,
  impsShareBudgetLossOver: recommendationServiceImpsShareBudgetLossOver,
  maximizeConversions: recommendationServiceMaximizeConversions,
  maximizeClicks: recommendationServiceMaximizeClicks,
  maximizeVideoViews: recommendationServiceMaximizeVideoViews,
  maximizeViewableImpressions: recommendationServiceMaximizeViewableImpressions,
  enhancedCpc: recommendationServiceEnhancedCpc,
  updateAdCreative: recommendationServiceUpdateAdCreative,
  duplicateTargetingSettings: recommendationServiceDuplicateTargetingSettings,
  notOptimalAdCountCombinedAdTypeAndImageSize: recommendationServiceNotOptimalAdCountCombinedAdTypeAndImageSize,
  adGroupsForAddingAds: recommendationServiceAdGroupsForAddingAds,
  dailyBudgetSmall: recommendationServiceDailyBudgetSmall,
  insufficientTargeting: recommendationServiceInsufficientTargeting,
  insufficientAdScheduleTargeting: recommendationServiceInsufficientAdScheduleTargeting,
  insufficientConversions: recommendationServiceInsufficientConversions,
  insufficientClicks: recommendationServiceInsufficientClicks,
  insufficientVideoViews: recommendationServiceInsufficientVideoViews,
  createCampaign: recommendationServiceCreateCampaign,
  createAdGroup: recommendationServiceCreateAdGroup,
  createAd: recommendationServiceCreateAd,
  createResponsiveDisplayAds: recommendationServiceCreateResponsiveDisplayAds,
  turnYourAccountOn: recommendationServiceTurnYourAccountOn,
  turnYourAdOn: recommendationServiceTurnYourAdOn,
  insufficientAccountBalance: recommendationServiceInsufficientAccountBalance,
  missingPaymentSettings: recommendationServiceMissingPaymentSettings,
  audienceListNotAccumulated: recommendationServiceAudienceListNotAccumulated,
  notTargetingProperAudienceList: recommendationServiceNotTargetingProperAudienceListAdGroup
}).nullable();

export type Recommendation = z.infer<typeof recommendation>;
