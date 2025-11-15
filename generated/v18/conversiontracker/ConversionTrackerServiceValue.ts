import { z } from 'zod';

import { conversionTracker } from './ConversionTracker';
import { error } from '../../common/Error';
import { conversionTrackerServiceStatsPeriodCustomDate } from './ConversionTrackerServiceStatsPeriodCustomDate';

export const conversionTrackerServiceValue = z.object({
  conversionTracker: conversionTracker,
  errors: z.array(error).nullable(),
  operationSucceeded: z.boolean().nullable(),
  statsPeriodCustomDate: conversionTrackerServiceStatsPeriodCustomDate
}).nullable();

export type ConversionTrackerServiceValue = z.infer<typeof conversionTrackerServiceValue>;
