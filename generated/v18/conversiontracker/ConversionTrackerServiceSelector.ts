import { z } from 'zod';

import { conversionTrackerServiceAppConversionPlatform } from './ConversionTrackerServiceAppConversionPlatform';
import { conversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { conversionTrackerServiceType } from './ConversionTrackerServiceType';
import { conversionTrackerServiceCountingType } from './ConversionTrackerServiceCountingType';
import { conversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { conversionTrackerServiceExcludePreviousConversion } from './ConversionTrackerServiceExcludePreviousConversion';
import { conversionTrackerServiceStatsPeriod } from './ConversionTrackerServiceStatsPeriod';
import { conversionTrackerServiceStatsPeriodCustomDate } from './ConversionTrackerServiceStatsPeriodCustomDate';
import { conversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';

export const conversionTrackerServiceSelector = z.object({
  accountId: z.number().int(),
  appConversionPlatform: conversionTrackerServiceAppConversionPlatform,
  appIds: z.array(z.string().nullable()).nullable(),
  categories: z.array(conversionTrackerServiceCategory).nullable(),
  conversionTrackerIds: z.array(z.number().int().nullable()).nullable(),
  conversionTrackerTypes: z.array(conversionTrackerServiceType).nullable(),
  countingType: conversionTrackerServiceCountingType,
  excludeFromBidding: conversionTrackerServiceExcludeFromBidding,
  excludePreviousConversion: conversionTrackerServiceExcludePreviousConversion,
  numberResults: z.number().int().min(1).max(1000).nullable(),
  startIndex: z.number().int().min(1).nullable(),
  statsPeriod: conversionTrackerServiceStatsPeriod,
  statsPeriodCustomDate: conversionTrackerServiceStatsPeriodCustomDate,
  statuses: z.array(conversionTrackerServiceStatus).nullable()
}).nullable();

export type ConversionTrackerServiceSelector = z.infer<typeof conversionTrackerServiceSelector>;
