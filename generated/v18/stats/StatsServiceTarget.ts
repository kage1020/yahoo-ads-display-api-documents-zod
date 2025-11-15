import { z } from 'zod';

import { StatsServiceAdScheduleTarget } from './StatsServiceAdScheduleTarget';
import { StatsServiceAgeTarget } from './StatsServiceAgeTarget';
import { StatsServiceAppTarget } from './StatsServiceAppTarget';
import { StatsServiceDeviceTarget } from './StatsServiceDeviceTarget';
import { StatsServiceGenderTarget } from './StatsServiceGenderTarget';
import { StatsServiceGeoTarget } from './StatsServiceGeoTarget';
import { StatsServiceOsTarget } from './StatsServiceOsTarget';
import { StatsServiceOsVersionTarget } from './StatsServiceOsVersionTarget';
import { StatsServicePlacementTarget } from './StatsServicePlacementTarget';
import { StatsServiceAudienceListTarget } from './StatsServiceAudienceListTarget';
import { StatsServicePlacementCategoryDetailTarget } from './StatsServicePlacementCategoryDetailTarget';
import { StatsServiceContentsTarget } from './StatsServiceContentsTarget';
import { StatsServiceTargetSetting } from './StatsServiceTargetSetting';
import { StatsServiceTargetType } from './StatsServiceTargetType';

export const StatsServiceTarget = z.object({
  adScheduleTarget: StatsServiceAdScheduleTarget,
  ageTarget: StatsServiceAgeTarget,
  appTarget: StatsServiceAppTarget,
  deviceTarget: StatsServiceDeviceTarget,
  genderTarget: StatsServiceGenderTarget,
  geoTarget: StatsServiceGeoTarget,
  osTarget: StatsServiceOsTarget,
  osVersionTarget: StatsServiceOsVersionTarget,
  placementTarget: StatsServicePlacementTarget,
  audienceListTarget: StatsServiceAudienceListTarget,
  placementCategoryDetailTarget: StatsServicePlacementCategoryDetailTarget,
  contentsTarget: StatsServiceContentsTarget,
  targetId: z.string().nullable(),
  targetSetting: StatsServiceTargetSetting,
  targetType: StatsServiceTargetType
}).nullable();

export type StatsServiceTarget = z.infer<typeof StatsServiceTarget>;
