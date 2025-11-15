import { z } from 'zod';

import { AdGroupTargetServiceAdScheduleTarget } from './AdGroupTargetServiceAdScheduleTarget';
import { AdGroupTargetServiceAgeTarget } from './AdGroupTargetServiceAgeTarget';
import { AdGroupTargetServiceAppTarget } from './AdGroupTargetServiceAppTarget';
import { AdGroupTargetServiceDeviceTarget } from './AdGroupTargetServiceDeviceTarget';
import { AdGroupTargetServiceGenderTarget } from './AdGroupTargetServiceGenderTarget';
import { AdGroupTargetServiceGeoTarget } from './AdGroupTargetServiceGeoTarget';
import { AdGroupTargetServiceOsTarget } from './AdGroupTargetServiceOsTarget';
import { AdGroupTargetServiceOsVersionTarget } from './AdGroupTargetServiceOsVersionTarget';
import { AdGroupTargetServicePlacementTarget } from './AdGroupTargetServicePlacementTarget';
import { AdGroupTargetServiceAudienceListTarget } from './AdGroupTargetServiceAudienceListTarget';
import { AdGroupTargetServicePositionTarget } from './AdGroupTargetServicePositionTarget';
import { AdGroupTargetServicePlacementCategoryTarget } from './AdGroupTargetServicePlacementCategoryTarget';
import { AdGroupTargetServicePlacementCategoryDetailTarget } from './AdGroupTargetServicePlacementCategoryDetailTarget';
import { AdGroupTargetServiceContentsTarget } from './AdGroupTargetServiceContentsTarget';
import { AdGroupTargetServiceTargetSetting } from './AdGroupTargetServiceTargetSetting';
import { AdGroupTargetServiceTargetType } from './AdGroupTargetServiceTargetType';

export const AdGroupTargetServiceTarget = z.object({
  adScheduleTarget: AdGroupTargetServiceAdScheduleTarget,
  ageTarget: AdGroupTargetServiceAgeTarget,
  appTarget: AdGroupTargetServiceAppTarget,
  deviceTarget: AdGroupTargetServiceDeviceTarget,
  genderTarget: AdGroupTargetServiceGenderTarget,
  geoTarget: AdGroupTargetServiceGeoTarget,
  isRemove: z.boolean().nullable(),
  osTarget: AdGroupTargetServiceOsTarget,
  osVersionTarget: AdGroupTargetServiceOsVersionTarget,
  placementTarget: AdGroupTargetServicePlacementTarget,
  audienceListTarget: AdGroupTargetServiceAudienceListTarget,
  positionTarget: AdGroupTargetServicePositionTarget,
  placementCategoryTarget: AdGroupTargetServicePlacementCategoryTarget,
  placementCategoryDetailTarget: AdGroupTargetServicePlacementCategoryDetailTarget,
  contentsTarget: AdGroupTargetServiceContentsTarget,
  targetId: z.string().nullable(),
  targetSetting: AdGroupTargetServiceTargetSetting,
  targetType: AdGroupTargetServiceTargetType
}).nullable();

export type AdGroupTargetServiceTarget = z.infer<typeof AdGroupTargetServiceTarget>;
