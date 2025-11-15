import { z } from 'zod';

import { brandLiftServiceQuestion } from './BrandLiftServiceQuestion';
import { brandLiftServiceApprovalStatus } from './BrandLiftServiceApprovalStatus';

export const brandLift = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  brandLiftId: z.number().int().nullable(),
  questions: z.array(brandLiftServiceQuestion).nullable(),
  approvalStatus: brandLiftServiceApprovalStatus,
  disapprovalReason: z.string().nullable(),
  reviewCompleteDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  submitDate: z.string().nullable(),
  campaignStartDate: z.string().nullable(),
  campaignName: z.string().nullable(),
  notificationBusinessIds: z.array(z.string().nullable()).nullable()
}).nullable();

export type BrandLift = z.infer<typeof brandLift>;
