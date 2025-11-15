import { z } from 'zod';

import { adGroupServiceBiddingStrategyConfiguration } from './AdGroupServiceBiddingStrategyConfiguration';
import { adGroupServiceCustomParameters } from './AdGroupServiceCustomParameters';
import { adGroupServiceDeviceType } from './AdGroupServiceDeviceType';
import { adGroupServiceDeviceAppType } from './AdGroupServiceDeviceAppType';
import { adGroupServiceDeviceOsType } from './AdGroupServiceDeviceOsType';
import { adGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { adGroupServiceLabel } from './AdGroupServiceLabel';
import { adGroupServiceSmartTargetingEnabled } from './AdGroupServiceSmartTargetingEnabled';
import { adGroupServiceUserStatus } from './AdGroupServiceUserStatus';

export const adGroup = z.object({
  accountId: z.number().int().nullable(),
  biddingStrategyConfiguration: adGroupServiceBiddingStrategyConfiguration,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  customParameters: adGroupServiceCustomParameters,
  device: z.array(adGroupServiceDeviceType).nullable(),
  deviceApp: z.array(adGroupServiceDeviceAppType).nullable(),
  deviceOs: z.array(adGroupServiceDeviceOsType).nullable(),
  deviceOsVersion: z.string().nullable(),
  feedSetId: z.number().int().nullable(),
  excludeLineOaFriendAudienceListId: z.number().int().nullable(),
  isRemoveTrackingUrl: adGroupServiceIsRemoveFlg,
  labels: z.array(adGroupServiceLabel).nullable(),
  smartTargetingEnabled: adGroupServiceSmartTargetingEnabled,
  trackingUrl: z.string().nullable(),
  userStatus: adGroupServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroup = z.infer<typeof adGroup>;
