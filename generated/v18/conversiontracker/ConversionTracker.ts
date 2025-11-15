import { z } from 'zod';

import { ConversionTrackerServiceAppConversion } from './ConversionTrackerServiceAppConversion';
import { ConversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { ConversionTrackerServiceType } from './ConversionTrackerServiceType';
import { ConversionTrackerServiceCountingType } from './ConversionTrackerServiceCountingType';
import { ConversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { ConversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { ConversionTrackerServiceWebConversion } from './ConversionTrackerServiceWebConversion';
import { ConversionTrackerServiceIsPreviousConversion } from './ConversionTrackerServiceIsPreviousConversion';
import { ConversionTrackerServiceAdvancedMatchingEnabled } from './ConversionTrackerServiceAdvancedMatchingEnabled';
import { ConversionTrackerServiceLyTagConversion } from './ConversionTrackerServiceLyTagConversion';

export const ConversionTracker = z.object({
  accountId: z.number().int().nullable(),
  allConversionValue: z.string().nullable(),
  allConversions: z.number().int().nullable(),
  viewThroughConversions: z.number().int().nullable(),
  appConversion: ConversionTrackerServiceAppConversion,
  category: ConversionTrackerServiceCategory,
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerName: z.string().nullable(),
  conversionTrackerType: ConversionTrackerServiceType,
  conversionValue: z.string().nullable(),
  conversionValueViaAdClick: z.string().nullable(),
  conversions: z.number().int().nullable(),
  conversionsViaAdClick: z.number().int().nullable(),
  countingType: ConversionTrackerServiceCountingType,
  crossDeviceConversions: z.number().int().nullable(),
  excludeFromBidding: ConversionTrackerServiceExcludeFromBidding,
  measurementPeriod: z.number().int().nullable(),
  measurementPeriodView: z.number().int().nullable(),
  mostRecentConversionDate: z.string().nullable(),
  status: ConversionTrackerServiceStatus,
  userRevenueValue: z.number().int().nullable(),
  webConversion: ConversionTrackerServiceWebConversion,
  isPreviousConversion: ConversionTrackerServiceIsPreviousConversion,
  advancedMatchingEnabled: ConversionTrackerServiceAdvancedMatchingEnabled,
  lyTagConversion: ConversionTrackerServiceLyTagConversion
}).nullable();

export type ConversionTracker = z.infer<typeof ConversionTracker>;
