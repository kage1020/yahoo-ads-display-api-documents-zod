import { z } from 'zod';

import { abTestServiceCampaignUserStatus } from './AbTestServiceCampaignUserStatus';
import { abTestServiceIsRemoveFlg } from './AbTestServiceIsRemoveFlg';
import { abTestServiceStatus } from './AbTestServiceStatus';

export const abTest = z.object({
  accountId: z.number().int().nullable(),
  abTestId: z.number().int().nullable(),
  abTestName: z.string().nullable(),
  description: z.string().nullable(),
  aCampaignId: z.number().int().nullable(),
  aCampaignName: z.string().nullable(),
  aCampaignUserStatus: abTestServiceCampaignUserStatus,
  bCampaignId: z.number().int().nullable(),
  bCampaignName: z.string().nullable(),
  bCampaignUserStatus: abTestServiceCampaignUserStatus,
  endDate: z.string().nullable(),
  isRemoveDescription: abTestServiceIsRemoveFlg,
  startDate: z.string().nullable(),
  status: abTestServiceStatus
}).nullable();

export type AbTest = z.infer<typeof abTest>;
