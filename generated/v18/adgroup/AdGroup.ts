import { z } from 'zod';

import { AdGroupServiceBiddingStrategyConfiguration } from './AdGroupServiceBiddingStrategyConfiguration';
import { AdGroupServiceCustomParameters } from './AdGroupServiceCustomParameters';
import { AdGroupServiceDeviceType } from './AdGroupServiceDeviceType';
import { AdGroupServiceDeviceAppType } from './AdGroupServiceDeviceAppType';
import { AdGroupServiceDeviceOsType } from './AdGroupServiceDeviceOsType';
import { AdGroupServiceIsRemoveFlg } from './AdGroupServiceIsRemoveFlg';
import { AdGroupServiceLabel } from './AdGroupServiceLabel';
import { AdGroupServiceSmartTargetingEnabled } from './AdGroupServiceSmartTargetingEnabled';
import { AdGroupServiceUserStatus } from './AdGroupServiceUserStatus';

export const AdGroup = z.object({
  accountId: z.number().int().nullable(),
  biddingStrategyConfiguration: AdGroupServiceBiddingStrategyConfiguration,
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  customParameters: AdGroupServiceCustomParameters,
  device: z.array(AdGroupServiceDeviceType).nullable(),
  deviceApp: z.array(AdGroupServiceDeviceAppType).nullable(),
  deviceOs: z.array(AdGroupServiceDeviceOsType).nullable(),
  deviceOsVersion: z.string().nullable(),
  feedSetId: z.number().int().nullable(),
  excludeLineOaFriendAudienceListId: z.number().int().nullable(),
  isRemoveTrackingUrl: AdGroupServiceIsRemoveFlg,
  labels: z.array(AdGroupServiceLabel).nullable(),
  smartTargetingEnabled: AdGroupServiceSmartTargetingEnabled,
  trackingUrl: z.string().nullable(),
  userStatus: AdGroupServiceUserStatus,
  createdDate: z.string().nullable(),
  updatedDate: z.string().nullable()
}).nullable();

export type AdGroup = z.infer<typeof AdGroup>;
