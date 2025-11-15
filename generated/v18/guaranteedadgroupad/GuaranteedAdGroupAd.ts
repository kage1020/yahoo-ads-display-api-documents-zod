import { z } from 'zod';

import { GuaranteedAdGroupAdServiceAd } from './GuaranteedAdGroupAdServiceAd';
import { GuaranteedAdGroupAdServiceApprovalStatus } from './GuaranteedAdGroupAdServiceApprovalStatus';
import { GuaranteedAdGroupAdServiceLabel } from './GuaranteedAdGroupAdServiceLabel';
import { GuaranteedAdGroupAdServiceUserStatus } from './GuaranteedAdGroupAdServiceUserStatus';
import { GuaranteedAdGroupAdLandingPageStatus } from './GuaranteedAdGroupAdLandingPageStatus';

export const GuaranteedAdGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: GuaranteedAdGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  approvalStatus: GuaranteedAdGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonDescription: z.string().nullable(),
  impressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  viewableImpressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  labels: z.array(GuaranteedAdGroupAdServiceLabel).nullable(),
  mediaId: z.number().int().nullable(),
  thirdPartyTrackingScriptUrl: z.string().nullable(),
  thirdPartyTrackingVendor: z.string().nullable(),
  userStatus: GuaranteedAdGroupAdServiceUserStatus,
  landingPageStatus: GuaranteedAdGroupAdLandingPageStatus,
  preApprovalId: z.string().nullable(),
  landingPageUpdateScheduledTime: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAd = z.infer<typeof GuaranteedAdGroupAd>;
