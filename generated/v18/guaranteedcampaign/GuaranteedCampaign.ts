import { z } from 'zod';

import { guaranteedCampaignServiceLifetimeBudget } from './GuaranteedCampaignServiceLifetimeBudget';
import { guaranteedCampaignServiceCampaignBiddingStrategy } from './GuaranteedCampaignServiceCampaignBiddingStrategy';
import { guaranteedCampaignServiceLabel } from './GuaranteedCampaignServiceLabel';
import { guaranteedCampaignServiceServingStatus } from './GuaranteedCampaignServiceServingStatus';
import { guaranteedCampaignServiceUserStatus } from './GuaranteedCampaignServiceUserStatus';
import { guaranteedCampaignServiceViewableFrequencyCap } from './GuaranteedCampaignServiceViewableFrequencyCap';
import { guaranteedCampaignServiceAdCategoryStatus } from './GuaranteedCampaignServiceAdCategoryStatus';
import { guaranteedCampaignServicePackage } from './GuaranteedCampaignServicePackage';
import { guaranteedCampaignServiceConversionTracker } from './GuaranteedCampaignServiceConversionTracker';

export const guaranteedCampaign = z.object({
  accountId: z.number().int().nullable(),
  lifetimeBudget: guaranteedCampaignServiceLifetimeBudget,
  campaignBiddingStrategy: guaranteedCampaignServiceCampaignBiddingStrategy,
  campaignGoal: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  endDate: z.string().nullable(),
  endTime: z.string().nullable(),
  labels: z.array(guaranteedCampaignServiceLabel).nullable(),
  servingStatus: guaranteedCampaignServiceServingStatus,
  startDate: z.string().nullable(),
  startTime: z.string().nullable(),
  userStatus: guaranteedCampaignServiceUserStatus,
  viewableFrequencyCap: guaranteedCampaignServiceViewableFrequencyCap,
  guaranteedSimulationId: z.number().int().nullable(),
  notificationEmailAddress: z.array(z.string().nullable()).nullable(),
  adCategoryStatus: guaranteedCampaignServiceAdCategoryStatus,
  campaignCanceledDate: z.string().nullable(),
  package: guaranteedCampaignServicePackage,
  conversionTracker: guaranteedCampaignServiceConversionTracker
}).nullable();

export type GuaranteedCampaign = z.infer<typeof guaranteedCampaign>;
