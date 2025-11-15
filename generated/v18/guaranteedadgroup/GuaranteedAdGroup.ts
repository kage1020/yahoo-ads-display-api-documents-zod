import { z } from 'zod';

import { GuaranteedAdGroupServiceDeviceType } from './GuaranteedAdGroupServiceDeviceType';
import { GuaranteedAdGroupServiceDeviceAppType } from './GuaranteedAdGroupServiceDeviceAppType';
import { GuaranteedAdGroupServiceDeviceOsType } from './GuaranteedAdGroupServiceDeviceOsType';
import { GuaranteedAdGroupServiceLabel } from './GuaranteedAdGroupServiceLabel';
import { GuaranteedAdGroupServiceUserStatus } from './GuaranteedAdGroupServiceUserStatus';
import { AdGroupTarget } from './AdGroupTarget';

export const GuaranteedAdGroup = z.object({
  accountId: z.number().int().nullable(),
  adGroupId: z.number().int().nullable(),
  adGroupName: z.string().nullable(),
  campaignId: z.number().int().nullable(),
  campaignName: z.string().nullable(),
  device: z.array(GuaranteedAdGroupServiceDeviceType).nullable(),
  deviceApp: z.array(GuaranteedAdGroupServiceDeviceAppType).nullable(),
  deviceOs: z.array(GuaranteedAdGroupServiceDeviceOsType).nullable(),
  labels: z.array(GuaranteedAdGroupServiceLabel).nullable(),
  userStatus: GuaranteedAdGroupServiceUserStatus,
  adGroupTargets: z.array(AdGroupTarget).nullable(),
  isCreativeProfile: z.boolean().nullable()
}).nullable();

export type GuaranteedAdGroup = z.infer<typeof GuaranteedAdGroup>;
