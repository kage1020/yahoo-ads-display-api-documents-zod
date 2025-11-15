import { z } from 'zod';

import { GuaranteedCampaignServiceLifetimeBudget } from './GuaranteedCampaignServiceLifetimeBudget';
import { GuaranteedCampaignServiceCampaignBiddingStrategy } from './GuaranteedCampaignServiceCampaignBiddingStrategy';
import { GuaranteedCampaignServiceLabel } from './GuaranteedCampaignServiceLabel';
import { GuaranteedCampaignServiceServingStatus } from './GuaranteedCampaignServiceServingStatus';
import { GuaranteedCampaignServiceUserStatus } from './GuaranteedCampaignServiceUserStatus';
import { GuaranteedCampaignServiceViewableFrequencyCap } from './GuaranteedCampaignServiceViewableFrequencyCap';
import { GuaranteedCampaignServiceAdCategoryStatus } from './GuaranteedCampaignServiceAdCategoryStatus';
import { GuaranteedCampaignServicePackage } from './GuaranteedCampaignServicePackage';
import { GuaranteedCampaignServiceConversionTracker } from './GuaranteedCampaignServiceConversionTracker';

export const GuaranteedCampaign = z.object({
  accountId: z.number().int().nullable(),
  lifetimeBudget: GuaranteedCampaignServiceLifetimeBudget,
  campaignBiddingStrategy: GuaranteedCampaignServiceCampaignBiddingStrategy,
  campaignGoal: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  endDate: z.string().nullable(),
  endTime: z.string().nullable(),
  labels: z.array(GuaranteedCampaignServiceLabel).nullable(),
  servingStatus: GuaranteedCampaignServiceServingStatus,
  startDate: z.string().nullable(),
  startTime: z.string().nullable(),
  userStatus: GuaranteedCampaignServiceUserStatus,
  viewableFrequencyCap: GuaranteedCampaignServiceViewableFrequencyCap,
  guaranteedSimulationId: z.number().int().nullable(),
  notificationEmailAddress: z.array(z.string().nullable()).nullable(),
  adCategoryStatus: GuaranteedCampaignServiceAdCategoryStatus,
  campaignCanceledDate: z.string().nullable(),
  package: GuaranteedCampaignServicePackage,
  conversionTracker: GuaranteedCampaignServiceConversionTracker
}).nullable();

export type GuaranteedCampaign = z.infer<typeof GuaranteedCampaign>;
