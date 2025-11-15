import { z } from 'zod';

import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { adGroupAdServiceAdType } from './AdGroupAdServiceAdType';
import { adGroupAdServiceMainMediaFormat } from './AdGroupAdServiceMainMediaFormat';
import { adGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';
import { adGroupAdServiceCreatedDateRange } from './AdGroupAdServiceCreatedDateRange';
import { adGroupAdServiceUpdatedDateRange } from './AdGroupAdServiceUpdatedDateRange';

export const adGroupAdServiceSelector = z.object({
  accountId: z.number().int(),
  adGroupIds: z.array(z.number().int().nullable()).nullable(),
  adIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(adGroupAdServiceApprovalStatus).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  containsLabel: z.boolean().nullable(),
  labelIds: z.array(z.number().int().nullable()).nullable(),
  mediaIds: z.array(z.number().int().nullable()).nullable(),
  adTypes: z.array(adGroupAdServiceAdType).nullable(),
  mainMediaFormats: z.array(adGroupAdServiceMainMediaFormat).nullable(),
  numberResults: z.number().int().min(1).max(10000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  userStatuses: z.array(adGroupAdServiceUserStatus).nullable(),
  createdDateRange: adGroupAdServiceCreatedDateRange,
  updatedDateRange: adGroupAdServiceUpdatedDateRange
}).nullable();

export type AdGroupAdServiceSelector = z.infer<typeof adGroupAdServiceSelector>;
