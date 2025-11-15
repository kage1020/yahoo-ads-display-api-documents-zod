import { z } from 'zod';

import { BrandLiftServiceQuestion } from './BrandLiftServiceQuestion';
import { BrandLiftServiceApprovalStatus } from './BrandLiftServiceApprovalStatus';

export const BrandLift = z.object({
  accountId: z.number().int().nullable(),
  campaignId: z.number().int().nullable(),
  brandLiftId: z.number().int().nullable(),
  questions: z.array(BrandLiftServiceQuestion).nullable(),
  approvalStatus: BrandLiftServiceApprovalStatus,
  disapprovalReason: z.string().nullable(),
  reviewCompleteDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  submitDate: z.string().nullable(),
  campaignStartDate: z.string().nullable(),
  campaignName: z.string().nullable(),
  notificationBusinessIds: z.array(z.string().nullable()).nullable()
}).nullable();

export type BrandLift = z.infer<typeof BrandLift>;
