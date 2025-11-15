import { z } from 'zod';

import { StatsServiceAdGroupStatsValue } from './StatsServiceAdGroupStatsValue';
import { StatsServiceAdStatsValue } from './StatsServiceAdStatsValue';
import { StatsServiceCampaignStatsValue } from './StatsServiceCampaignStatsValue';
import { Error } from './Error';
import { StatsServiceImageStatsValue } from './StatsServiceImageStatsValue';
import { StatsServicePeriodCustomDate } from './StatsServicePeriodCustomDate';
import { StatsServiceStatsPeriod } from './StatsServiceStatsPeriod';
import { StatsServiceTargetStatsValue } from './StatsServiceTargetStatsValue';
import { StatsServiceType } from './StatsServiceType';
import { StatsServiceVideoStatsValue } from './StatsServiceVideoStatsValue';

export const StatsServiceValue = z.object({
  accountId: z.number().int().nullable(),
  adGroupStatsValue: StatsServiceAdGroupStatsValue,
  adStatsValue: StatsServiceAdStatsValue,
  campaignStatsValue: StatsServiceCampaignStatsValue,
  errors: z.array(Error).nullable(),
  imageStatsValue: StatsServiceImageStatsValue,
  operationSucceeded: z.boolean().nullable(),
  periodCustomDate: StatsServicePeriodCustomDate,
  statsPeriod: StatsServiceStatsPeriod,
  targetStatsValue: StatsServiceTargetStatsValue,
  type: StatsServiceType,
  videoStatsValue: StatsServiceVideoStatsValue
}).nullable();

export type StatsServiceValue = z.infer<typeof StatsServiceValue>;
