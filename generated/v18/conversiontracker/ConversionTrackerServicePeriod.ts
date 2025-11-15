import { z } from 'zod';

import { conversionTrackerServicePeriodDatetime } from './ConversionTrackerServicePeriodDatetime';

export const conversionTrackerServicePeriod = z.object({
  periodEndDate: conversionTrackerServicePeriodDatetime,
  periodStartDate: conversionTrackerServicePeriodDatetime
}).nullable();

export type ConversionTrackerServicePeriod = z.infer<typeof conversionTrackerServicePeriod>;
