import { z } from 'zod';

import { conversionTrackerServiceType } from '../conversiontracker/ConversionTrackerServiceType';
import { conversionTrackerServiceStatus } from '../conversiontracker/ConversionTrackerServiceStatus';

export const conversionGroupServiceConversion = z.object({
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerType: conversionTrackerServiceType,
  conversionTagId: z.number().int().nullable(),
  conversionTagName: z.string().nullable(),
  status: conversionTrackerServiceStatus
}).nullable();

export type ConversionGroupServiceConversion = z.infer<typeof conversionGroupServiceConversion>;
