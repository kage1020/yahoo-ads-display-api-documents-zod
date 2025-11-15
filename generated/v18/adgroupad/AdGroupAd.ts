import { z } from 'zod';

import { AdGroupAdServiceAd } from './AdGroupAdServiceAd';
import { AdGroupAdServiceApprovalStatus } from './AdGroupAdServiceApprovalStatus';
import { AdGroupAdServiceIsRemoveFlg } from './AdGroupAdServiceIsRemoveFlg';
import { AdGroupAdServiceLabel } from './AdGroupAdServiceLabel';
import { AdGroupAdServiceUserStatus } from './AdGroupAdServiceUserStatus';

export const AdGroupAd = z.object({
  accountId: z.number().int().nullable(),
  ad: AdGroupAdServiceAd,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  adId: z.number().int().nullable(),
  adName: z.string().nullable(),
  approvalStatus: AdGroupAdServiceApprovalStatus,
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  disapprovalReasonDescription: z.string().nullable(),
  impressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  viewableImpressionBeaconUrls: z.array(z.string().nullable()).nullable(),
  isRemoveImpressionBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveViewableImpressionBeaconUrls: AdGroupAdServiceIsRemoveFlg,
  isRemoveThirdPartyTrackingScriptUrl: AdGroupAdServiceIsRemoveFlg,
  labels: z.array(AdGroupAdServiceLabel).nullable(),
  mediaId: z.number().int().nullable(),
  thirdPartyTrackingScriptUrl: z.string().nullable(),
  thirdPartyTrackingVendor: z.string().nullable(),
  userStatus: AdGroupAdServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroupAd = z.infer<typeof AdGroupAd>;
