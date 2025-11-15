import { z } from 'zod';

import { CampaignServiceBudget } from './CampaignServiceBudget';
import { CampaignServiceBiddingStrategyConfiguration } from './CampaignServiceBiddingStrategyConfiguration';
import { CampaignServiceCampaignGoalSubtype } from './CampaignServiceCampaignGoalSubtype';
import { CampaignServiceBiddingOption } from './CampaignServiceBiddingOption';
import { CampaignServiceOptimizer } from './CampaignServiceOptimizer';
import { CampaignServiceCustomParameters } from './CampaignServiceCustomParameters';
import { CampaignServiceAppOsType } from './CampaignServiceAppOsType';
import { CampaignServiceIsRemoveFlg } from './CampaignServiceIsRemoveFlg';
import { CampaignServiceLabel } from './CampaignServiceLabel';
import { CampaignServiceServingStatus } from './CampaignServiceServingStatus';
import { CampaignServiceUserStatus } from './CampaignServiceUserStatus';
import { CampaignServiceViewableFrequencyCap } from './CampaignServiceViewableFrequencyCap';
import { CampaignServiceSkanOptimizeAdDeliveryEnabled } from './CampaignServiceSkanOptimizeAdDeliveryEnabled';
import { CampaignServiceConversionTracker } from './CampaignServiceConversionTracker';

export const Campaign = z.object({
  accountId: z.number().int().nullable(),
  appId: z.string().nullable(),
  appName: z.string().nullable(),
  budget: CampaignServiceBudget,
  biddingStrategyConfiguration: CampaignServiceBiddingStrategyConfiguration,
  campaignGoal: z.string().nullable(),
  campaignGoalSubtype: CampaignServiceCampaignGoalSubtype,
  biddingOption: CampaignServiceBiddingOption,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  optimizer: CampaignServiceOptimizer,
  customParameters: CampaignServiceCustomParameters,
  appOsType: CampaignServiceAppOsType,
  endDate: z.string().nullable(),
  endTime: z.string().nullable(),
  feedId: z.number().int().nullable(),
  isRemoveTrackingUrl: CampaignServiceIsRemoveFlg,
  labels: z.array(CampaignServiceLabel).nullable(),
  optimizationScore: z.number().nullable(),
  servingStatus: CampaignServiceServingStatus,
  startDate: z.string().nullable(),
  startTime: z.string().nullable(),
  trackingUrl: z.string().nullable(),
  userStatus: CampaignServiceUserStatus,
  viewableFrequencyCap: CampaignServiceViewableFrequencyCap,
  campaignDeliveryType: z.string().nullable(),
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable(),
  vendorName: z.string().nullable(),
  skanOptimizeAdDeliveryEnabled: CampaignServiceSkanOptimizeAdDeliveryEnabled,
  conversionTracker: CampaignServiceConversionTracker
}).nullable();

export type Campaign = z.infer<typeof Campaign>;
