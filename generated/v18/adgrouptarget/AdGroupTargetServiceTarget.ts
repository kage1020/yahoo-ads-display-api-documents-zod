import { z } from 'zod';

import { adGroupTargetServiceAdScheduleTarget } from './AdGroupTargetServiceAdScheduleTarget';
import { adGroupTargetServiceAgeTarget } from './AdGroupTargetServiceAgeTarget';
import { adGroupTargetServiceAppTarget } from './AdGroupTargetServiceAppTarget';
import { adGroupTargetServiceDeviceTarget } from './AdGroupTargetServiceDeviceTarget';
import { adGroupTargetServiceGenderTarget } from './AdGroupTargetServiceGenderTarget';
import { adGroupTargetServiceGeoTarget } from './AdGroupTargetServiceGeoTarget';
import { adGroupTargetServiceOsTarget } from './AdGroupTargetServiceOsTarget';
import { adGroupTargetServiceOsVersionTarget } from './AdGroupTargetServiceOsVersionTarget';
import { adGroupTargetServicePlacementTarget } from './AdGroupTargetServicePlacementTarget';
import { adGroupTargetServiceAudienceListTarget } from './AdGroupTargetServiceAudienceListTarget';
import { adGroupTargetServicePositionTarget } from './AdGroupTargetServicePositionTarget';
import { adGroupTargetServicePlacementCategoryTarget } from './AdGroupTargetServicePlacementCategoryTarget';
import { adGroupTargetServicePlacementCategoryDetailTarget } from './AdGroupTargetServicePlacementCategoryDetailTarget';
import { adGroupTargetServiceContentsTarget } from './AdGroupTargetServiceContentsTarget';
import { adGroupTargetServiceTargetSetting } from './AdGroupTargetServiceTargetSetting';
import { adGroupTargetServiceTargetType } from './AdGroupTargetServiceTargetType';

export const adGroupTargetServiceTarget = z.object({
  adScheduleTarget: adGroupTargetServiceAdScheduleTarget,
  ageTarget: adGroupTargetServiceAgeTarget,
  appTarget: adGroupTargetServiceAppTarget,
  deviceTarget: adGroupTargetServiceDeviceTarget,
  genderTarget: adGroupTargetServiceGenderTarget,
  geoTarget: adGroupTargetServiceGeoTarget,
  isRemove: z.boolean().nullable(),
  osTarget: adGroupTargetServiceOsTarget,
  osVersionTarget: adGroupTargetServiceOsVersionTarget,
  placementTarget: adGroupTargetServicePlacementTarget,
  audienceListTarget: adGroupTargetServiceAudienceListTarget,
  positionTarget: adGroupTargetServicePositionTarget,
  placementCategoryTarget: adGroupTargetServicePlacementCategoryTarget,
  placementCategoryDetailTarget: adGroupTargetServicePlacementCategoryDetailTarget,
  contentsTarget: adGroupTargetServiceContentsTarget,
  targetId: z.string().nullable(),
  targetSetting: adGroupTargetServiceTargetSetting,
  targetType: adGroupTargetServiceTargetType
}).nullable();

export type AdGroupTargetServiceTarget = z.infer<typeof adGroupTargetServiceTarget>;
