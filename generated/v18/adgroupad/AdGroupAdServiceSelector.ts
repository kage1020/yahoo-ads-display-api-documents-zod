import { z } from 'zod';

import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { AdGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { AdGroupAdServiceMainMediaFormat } from './AdGroupAdServiceMainMediaFormat';
import { AdGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';
import { AdGroupAdServiceCreatedDateRange } from './AdGroupAdServiceCreatedDateRange';
import { AdGroupAdServiceUpdatedDateRange } from './AdGroupAdServiceUpdatedDateRange';

export const AdGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(AdGroupAdServiceApprovalStatus).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(AdGroupAdServiceAdType).nullable(),
  mainMediaFormats: z.array(AdGroupAdServiceMainMediaFormat).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(AdGroupAdServiceUserStatus).nullable(),
  createdDateRange: AdGroupAdServiceCreatedDateRange,
  updatedDateRange: AdGroupAdServiceUpdatedDateRange
}).nullable();

export type AdGroupAdServiceSelector = z.infer<typeof AdGroupAdServiceSelector>;
