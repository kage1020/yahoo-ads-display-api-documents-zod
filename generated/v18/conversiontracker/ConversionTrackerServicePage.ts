import { z } from 'zod';

import { conversionTrackerServicePeriod } from './ConversionTrackerServicePeriod';
import { conversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const conversionTrackerServicePage = z.object({
  period: conversionTrackerServicePeriod,
  totalAllConversionValue: z.string().nullable(),
  totalAllConversions: z.number().int().nullable(),
  totalConversionValue: z.string().nullable(),
  totalConversionValueViaAdClick: z.string().nullable(),
  totalConversions: z.number().int().nullable(),
  totalConversionsViaAdClick: z.number().int().nullable(),
  totalCrossDeviceConversions: z.number().int().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(conversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServicePage = z.infer<typeof conversionTrackerServicePage>;
