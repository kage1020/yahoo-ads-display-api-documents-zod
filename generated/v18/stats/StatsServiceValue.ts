import { z } from 'zod';

import { statsServiceAdGroupStatsValue } from './StatsServiceAdGroupStatsValue';
import { statsServiceAdStatsValue } from './StatsServiceAdStatsValue';
import { statsServiceCampaignStatsValue } from './StatsServiceCampaignStatsValue';
import { error } from '../../common/Error';
import { statsServiceImageStatsValue } from './StatsServiceImageStatsValue';
import { statsServicePeriodCustomDate } from './StatsServicePeriodCustomDate';
import { statsServiceStatsPeriod } from './StatsServiceStatsPeriod';
import { statsServiceTargetStatsValue } from './StatsServiceTargetStatsValue';
import { statsServiceType } from './StatsServiceType';
import { statsServiceVideoStatsValue } from './StatsServiceVideoStatsValue';

export const statsServiceValue = z.object({
  accountId: z.number().int().nullable(),
  adGroupStatsValue: statsServiceAdGroupStatsValue,
  adStatsValue: statsServiceAdStatsValue,
  campaignStatsValue: statsServiceCampaignStatsValue,
  errors: z.array(error).nullable(),
  imageStatsValue: statsServiceImageStatsValue,
  operationSucceeded: z.boolean().nullable(),
  periodCustomDate: statsServicePeriodCustomDate,
  statsPeriod: statsServiceStatsPeriod,
  targetStatsValue: statsServiceTargetStatsValue,
  type: statsServiceType,
  videoStatsValue: statsServiceVideoStatsValue
}).nullable();

export type StatsServiceValue = z.infer<typeof statsServiceValue>;
