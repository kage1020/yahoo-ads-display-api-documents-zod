import { z } from 'zod';

import { brandLiftServiceApprovalStatus } from './BrandLiftServiceApprovalStatus';

export const brandLiftServiceSelector = z.object({
  accountId: z.number().int(),
  brandLiftIds: z.array(z.number().int()).nullable(),
  campaignIds: z.array(z.number().int().nullable()).nullable(),
  approvalStatuses: z.array(brandLiftServiceApprovalStatus).nullable(),
  numberResults: z.number().int().min(1).max(500).nullable(),
  startIndex: z.number().int().min(1).nullable()
}).nullable();

export type BrandLiftServiceSelector = z.infer<typeof brandLiftServiceSelector>;
