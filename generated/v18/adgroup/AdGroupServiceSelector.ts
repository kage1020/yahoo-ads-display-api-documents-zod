import { z } from 'zod';

import { AdGroupServiceUserStatus } from './AdGroupServiceUserStatus';
import { AdGroupServiceCreatedDateRange } from './AdGroupServiceCreatedDateRange';
import { AdGroupServiceUpdatedDateRange } from './AdGroupServiceUpdatedDateRange';
import { AdGroupServiceBiddingValueCpcRange } from './AdGroupServiceBiddingValueCpcRange';

export const AdGroupServiceSelector = z.object({
  accountId: z.number().int().nullable(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  feedSetIds: z.array(z.number().int().nullable()).nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(AdGroupServiceUserStatus).nullable(),
  createdDateRange: AdGroupServiceCreatedDateRange,
  updatedDateRange: AdGroupServiceUpdatedDateRange,
  biddingValueCpcRange: AdGroupServiceBiddingValueCpcRange
}).nullable();

export type AdGroupServiceSelector = z.infer<typeof AdGroupServiceSelector>;
