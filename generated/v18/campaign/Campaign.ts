import { z } from 'zod';

import { campaignServiceBudget } from './CampaignServiceBudget';
import { campaignServiceBiddingStrategyConfiguration } from './CampaignServiceBiddingStrategyConfiguration';
import { campaignServiceCampaignGoalSubtype } from './CampaignServiceCampaignGoalSubtype';
import { campaignServiceBiddingOption } from './CampaignServiceBiddingOption';
import { campaignServiceOptimizer } from './CampaignServiceOptimizer';
import { campaignServiceCustomParameters } from './CampaignServiceCustomParameters';
import { campaignServiceAppOsType } from './CampaignServiceAppOsType';
import { campaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';
import { campaignServiceLabel } from './CampaignServiceLabel';
import { campaignServiceServingStatus } from './CampaignServiceServingStatus';
import { campaignServiceUserStatus } from './CampaignServiceUserStatus';
import { campaignServiceViewableFrequencyCap } from './CampaignServiceViewableFrequencyCap';
import { campaignServiceSkanOptimizeAdDeliveryEnabled } from './CampaignServiceSkanOptimizeAdDeliveryEnabled';
import { campaignServiceConversionTracker } from './CampaignServiceConversionTracker';

export const campaign = z.object({
  accountId: z.number().int().nullable(),
  appId: z.string().nullable(),
  appName: z.string().nullable(),
  budget: campaignServiceBudget,
  biddingStrategyConfiguration: campaignServiceBiddingStrategyConfiguration,
  campaignGoal: z.string().nullable(),
  campaignGoalSubtype: campaignServiceCampaignGoalSubtype,
  biddingOption: campaignServiceBiddingOption,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  optimizer: campaignServiceOptimizer,
  customParameters: campaignServiceCustomParameters,
  appOsType: campaignServiceAppOsType,
  endDate: z.string().nullable(),
  endTime: z.string().nullable(),
  feedId: z.number().int().nullable(),
  isRemoveTrackingUrl: campaignServiceIsRemoveFlg,
  labels: z.array(campaignServiceLabel).nullable(),
  optimizationScore: z.number().nullable(),
  servingStatus: campaignServiceServingStatus,
  startDate: z.string().nullable(),
  startTime: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  userStatus: campaignServiceUserStatus,
  viewableFrequencyCap: campaignServiceViewableFrequencyCap,
  campaignDeliveryType: z.string().nullable(),
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable(),
  vendorName: z.string().nullable(),
  skanOptimizeAdDeliveryEnabled: campaignServiceSkanOptimizeAdDeliveryEnabled,
  conversionTracker: campaignServiceConversionTracker
}).nullable();

export type Campaign = z.infer<typeof campaign>;
