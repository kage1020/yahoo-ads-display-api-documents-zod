import { z } from 'zod';

import { guaranteedAdGroupServiceDeviceType } from './GuaranteedAdGroupServiceDeviceType';
import { guaranteedAdGroupServiceDeviceAppType } from './GuaranteedAdGroupServiceDeviceAppType';
import { guaranteedAdGroupServiceDeviceOsType } from './GuaranteedAdGroupServiceDeviceOsType';
import { guaranteedAdGroupServiceLabel } from './GuaranteedAdGroupServiceLabel';
import { guaranteedAdGroupServiceUserStatus } from './GuaranteedAdGroupServiceUserStatus';
import { adGroupTarget } from '../adgrouptarget/AdGroupTarget';

export const guaranteedAdGroup = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  device: z.array(guaranteedAdGroupServiceDeviceType).nullable(),
  deviceApp: z.array(guaranteedAdGroupServiceDeviceAppType).nullable(),
  deviceOs: z.array(guaranteedAdGroupServiceDeviceOsType).nullable(),
  labels: z.array(guaranteedAdGroupServiceLabel).nullable(),
  userStatus: guaranteedAdGroupServiceUserStatus,
  adGroupTargets: z.array(adGroupTarget).nullable(),
  isCreativeProfile: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroup = z.infer<typeof guaranteedAdGroup>;
