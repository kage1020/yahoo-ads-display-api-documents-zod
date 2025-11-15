import { z } from 'zod';

import { conversionTrackerServiceAppConversion } from './ConversionTrackerServiceAppConversion';
import { conversionTrackerServiceCategory } from './ConversionTrackerServiceCategory';
import { conversionTrackerServiceType } from './ConversionTrackerServiceType';
import { conversionTrackerServiceCountingType } from './ConversionTrackerServiceCountingType';
import { conversionTrackerServiceExcludeFromBidding } from './ConversionTrackerServiceExcludeFromBidding';
import { conversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';
import { conversionTrackerServiceWebConversion } from './ConversionTrackerServiceWebConversion';
import { conversionTrackerServiceIsPreviousConversion } from './ConversionTrackerServiceIsPreviousConversion';
import { conversionTrackerServiceAdvancedMatchingEnabled } from './ConversionTrackerServiceAdvancedMatchingEnabled';
import { conversionTrackerServiceLyTagConversion } from './ConversionTrackerServiceLyTagConversion';

export const conversionTracker = z.object({
  accountId: z.number().int().nullable(),
  allConversionValue: z.string().nullable(),
  allConversions: z.number().int().nullable(),
  viewThroughConversions: z.number().int().nullable(),
  appConversion: conversionTrackerServiceAppConversion,
  category: conversionTrackerServiceCategory,
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerName: z.string().nullable(),
  conversionTrackerType: conversionTrackerServiceType,
  conversionValue: z.string().nullable(),
  conversionValueViaAdClick: z.string().nullable(),
  conversions: z.number().int().nullable(),
  conversionsViaAdClick: z.number().int().nullable(),
  countingType: conversionTrackerServiceCountingType,
  crossDeviceConversions: z.number().int().nullable(),
  excludeFromBidding: conversionTrackerServiceExcludeFromBidding,
  measurementPeriod: z.number().int().nullable(),
  measurementPeriodView: z.number().int().nullable(),
  mostRecentConversionDate: z.string().nullable(),
  status: conversionTrackerServiceStatus,
  userRevenueValue: z.number().int().nullable(),
  webConversion: conversionTrackerServiceWebConversion,
  isPreviousConversion: conversionTrackerServiceIsPreviousConversion,
  advancedMatchingEnabled: conversionTrackerServiceAdvancedMatchingEnabled,
  lyTagConversion: conversionTrackerServiceLyTagConversion
}).nullable();

export type ConversionTracker = z.infer<typeof conversionTracker>;
