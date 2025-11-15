import { z } from 'zod';

import { ConversionTrackerServicePeriod } from './ConversionTrackerServicePeriod';
import { ConversionTrackerServiceValue } from './ConversionTrackerServiceValue';

export const ConversionTrackerServicePage = z.object({
  period: ConversionTrackerServicePeriod,
  totalAllConversionValue: z.string().nullable(),
  totalAllConversions: z.number().int().nullable(),
  totalConversionValue: z.string().nullable(),
  totalConversionValueViaAdClick: z.string().nullable(),
  totalConversions: z.number().int().nullable(),
  totalConversionsViaAdClick: z.number().int().nullable(),
  totalCrossDeviceConversions: z.number().int().nullable(),
  totalNumEntries: z.number().int(),
  values: z.array(ConversionTrackerServiceValue).nullable()
}).nullable();

export type ConversionTrackerServicePage = z.infer<typeof ConversionTrackerServicePage>;
