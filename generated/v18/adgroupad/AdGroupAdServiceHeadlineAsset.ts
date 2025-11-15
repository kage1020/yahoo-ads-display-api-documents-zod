import { z } from 'zod';

import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const AdGroupAdServiceHeadlineAsset = z.object({
  text: z.string().nullable(),
  approvalStatus: AdGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceHeadlineAsset = z.infer<typeof AdGroupAdServiceHeadlineAsset>;
