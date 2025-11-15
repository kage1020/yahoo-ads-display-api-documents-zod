import { z } from 'zod';

import { AbTestServiceCampaignUserStatus } from './AbTestServiceCampaignUserStatus';
import { AbTestServiceIsRemoveFlg } from './AbTestServiceIsRemoveFlg';
import { AbTestServiceStatus } from './AbTestServiceStatus';

export const AbTest = z.object({
  accountId: z.number().int().nullable(),
  abTestId: z.number().int().nullable(),
  abTestName: z.string().nullable(),
  description: z.string().nullable(),
  aCampaignId: z.number().int().nullable(),
  aCampaignName: z.string().nullable(),
  aCampaignUserStatus: AbTestServiceCampaignUserStatus,
  bCampaignId: z.number().int().nullable(),
  bCampaignName: z.string().nullable(),
  bCampaignUserStatus: AbTestServiceCampaignUserStatus,
  endDate: z.string().nullable(),
  isRemoveDescription: AbTestServiceIsRemoveFlg,
  startDate: z.string().nullable(),
  status: AbTestServiceStatus
}).nullable();

export type AbTest = z.infer<typeof AbTest>;
