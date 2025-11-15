import { z } from 'zod';

import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';

export const adGroupAdServiceDescriptionAsset = z.object({
  text: z.string().nullable(),
  approvalStatus: adGroupAdServiceApprovalStatus,
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable()
}).nullable();

export type AdGroupAdServiceDescriptionAsset = z.infer<typeof adGroupAdServiceDescriptionAsset>;
