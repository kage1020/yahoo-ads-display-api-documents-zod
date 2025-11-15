import { z } from 'zod';

import { ConversionTrackerServiceAppConversionPlatform } from './ConversionTrackerServiceAppConversionPlatform';
import { ConversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { ConversionTrackerServiceType } from './ConversionTrackerServiceType';
import { ConversionTrackerServiceCountingType } from './ConversionTrackerServiceCountingType';
import { ConversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { ConversionTrackerServiceExcludePreviousConversion } from './ConversionTrackerServiceExcludePreviousConversion';
import { ConversionTrackerServiceStatsPeriod } from './ConversionTrackerServiceStatsPeriod';
import { ConversionTrackerServiceStatsPeriodCustomDate } from './ConversionTrackerServiceStatsPeriodCustomDate';
import { ConversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';

export const ConversionTrackerServiceSelector = z.object({
  accountId: z.number().int(),
  appConversionPlatform: ConversionTrackerServiceAppConversionPlatform,
  appIds: z.array(z.string().nullable()).nullable(),
  categories: z.array(ConversionTrackerServiceCategory).nullable(),
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerTypes: z.array(ConversionTrackerServiceType).nullable(),
  countingType: ConversionTrackerServiceCountingType,
  excludeFromBidding: ConversionTrackerServiceExcludeFromBidding,
  excludePreviousConversion: ConversionTrackerServiceExcludePreviousConversion,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  statsPeriod: ConversionTrackerServiceStatsPeriod,
  statsPeriodCustomDate: ConversionTrackerServiceStatsPeriodCustomDate,
  statuses: z.array(ConversionTrackerServiceStatus).nullable()
}).nullable();

export type ConversionTrackerServiceSelector = z.infer<typeof ConversionTrackerServiceSelector>;
