import { z } from 'zod';

import { ConversionTrackerServicePeriodDatetime } from './ConversionTrackerServicePeriodDatetime';

export const ConversionTrackerServicePeriod = z.object({
  periodEndDate: ConversionTrackerServicePeriodDatetime,
  periodStartDate: ConversionTrackerServicePeriodDatetime
}).nullable();

export type ConversionTrackerServicePeriod = z.infer<typeof ConversionTrackerServicePeriod>;
