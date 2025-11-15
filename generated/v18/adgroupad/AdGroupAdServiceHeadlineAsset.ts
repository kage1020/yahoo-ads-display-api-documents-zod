import { z } from 'zod';

import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const adGroupAdServiceHeadlineAsset = z.object({
  text: z.string().nullable(),
  approvalStatus: adGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceHeadlineAsset = z.infer<typeof adGroupAdServiceHeadlineAsset>;
