import { z } from 'zod';

import { statsServiceAdScheduleTarget } from './StatsServiceAdScheduleTarget';
import { statsServiceAgeTarget } from './StatsServiceAgeTarget';
import { statsServiceAppTarget } from './StatsServiceAppTarget';
import { statsServiceDeviceTarget } from './StatsServiceDeviceTarget';
import { statsServiceGenderTarget } from './StatsServiceGenderTarget';
import { statsServiceGeoTarget } from './StatsServiceGeoTarget';
import { statsServiceOsTarget } from './StatsServiceOsTarget';
import { statsServiceOsVersionTarget } from './StatsServiceOsVersionTarget';
import { statsServicePlacementTarget } from './StatsServicePlacementTarget';
import { statsServiceAudienceListTarget } from './StatsServiceAudienceListTarget';
import { statsServicePlacementCategoryDetailTarget } from './StatsServicePlacementCategoryDetailTarget';
import { statsServiceContentsTarget } from './StatsServiceContentsTarget';
import { statsServiceTargetSetting } from './StatsServiceTargetSetting';
import { statsServiceTargetType } from './StatsServiceTargetType';

export const statsServiceTarget = z.object({
  adScheduleTarget: statsServiceAdScheduleTarget,
  ageTarget: statsServiceAgeTarget,
  appTarget: statsServiceAppTarget,
  deviceTarget: statsServiceDeviceTarget,
  genderTarget: statsServiceGenderTarget,
  geoTarget: statsServiceGeoTarget,
  osTarget: statsServiceOsTarget,
  osVersionTarget: statsServiceOsVersionTarget,
  placementTarget: statsServicePlacementTarget,
  audienceListTarget: statsServiceAudienceListTarget,
  placementCategoryDetailTarget: statsServicePlacementCategoryDetailTarget,
  contentsTarget: statsServiceContentsTarget,
  targetId: z.string().nullable(),
  targetSetting: statsServiceTargetSetting,
  targetType: statsServiceTargetType
}).nullable();

export type StatsServiceTarget = z.infer<typeof statsServiceTarget>;
