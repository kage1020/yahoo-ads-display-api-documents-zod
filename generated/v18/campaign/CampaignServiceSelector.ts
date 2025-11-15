import { z } from 'zod';

import { CampaignServiceUserStatus } from './CampaignServiceUserStatus';
import { CampaignServiceCreatedDateRange } from './CampaignServiceCreatedDateRange';
import { CampaignServiceUpdatedDateRange } from './CampaignServiceUpdatedDateRange';
import { CampaignServiceBudgetAmountRange } from './CampaignServiceBudgetAmountRange';

export const CampaignServiceSelector = z.object({
  accountId: z.number().int(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  campaignBudgetIds: z.array(z.number().int().nullable()).nullable(),
  portfolioBiddingIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  feedIds: z.array(z.number().int().nullable()).nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(2000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(CampaignServiceUserStatus).nullable(),
  createdDateRange: CampaignServiceCreatedDateRange,
  updatedDateRange: CampaignServiceUpdatedDateRange,
  conversionGroupIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  budgetAmountRange: CampaignServiceBudgetAmountRange
}).nullable();

export type CampaignServiceSelector = z.infer<typeof CampaignServiceSelector>;
