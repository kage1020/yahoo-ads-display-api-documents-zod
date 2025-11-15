import { z } from 'zod';

import { adGroupAdServiceAd } from './AdGroupAdServiceAd';
import { adGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { adGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';
import { adGroupAdServiceLabel } from './AdGroupAdServiceLabel';
import { adGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';

export const adGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: adGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  approvalStatus: adGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonDescription: z.string().nullable(),
  impressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  viewableImpressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  isRemoveImpressionBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveViewableImpressionBeaconUrls: adGroupAdServiceIsRemoveFlg,
  isRemoveThirdPartyTrackingScriptUrl: adGroupAdServiceIsRemoveFlg,
  labels: z.array(adGroupAdServiceLabel).nullable(),
  mediaId: z.number().int().nullable(),
  thirdPartyTrackingScriptUrl: z.string().nullable(),
  thirdPartyTrackingVendor: z.string().nullable(),
  userStatus: adGroupAdServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroupAd = z.infer<typeof adGroupAd>;
