import { z } from 'zod';

import { guaranteedAdGroupAdServiceAd } from './GuaranteedAdGroupAdServiceAd';
import { guaranteedAdGroupAdServiceApprovalStatus } from './GuaranteedAdGroupAdServiceApprovalStatus';
import { guaranteedAdGroupAdServiceLabel } from './GuaranteedAdGroupAdServiceLabel';
import { guaranteedAdGroupAdServiceUserStatus } from './GuaranteedAdGroupAdServiceUserStatus';
import { guaranteedAdGroupAdLandingPageStatus } from './GuaranteedAdGroupAdLandingPageStatus';

export const guaranteedAdGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: guaranteedAdGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  approvalStatus: guaranteedAdGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonDescription: z.string().nullable(),
  impressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  viewableImpressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  labels: z.array(guaranteedAdGroupAdServiceLabel).nullable(),
  mediaId: z.number().int().nullable(),
  thirdPartyTrackingScriptUrl: z.string().nullable(),
  thirdPartyTrackingVendor: z.string().nullable(),
  userStatus: guaranteedAdGroupAdServiceUserStatus,
  landingPageStatus: guaranteedAdGroupAdLandingPageStatus,
  preApprovalId: z.string().nullable(),
  landingPageUpdateScheduledTime: z.string().nullable()
}).nullable();

export type GuaranteedAdGroupAd = z.infer<typeof guaranteedAdGroupAd>;
