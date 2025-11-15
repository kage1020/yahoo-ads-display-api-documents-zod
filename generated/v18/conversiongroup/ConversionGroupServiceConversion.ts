import { z } from 'zod';

import { ConversionTrackerServiceType } from './ConversionTrackerServiceType';
import { ConversionTrackerServiceStatus } from './ConversionTrackerServiceStatus';

export const ConversionGroupServiceConversion = z.object({
  conversionTrackerId: z.number().int().nullable(),
  conversionTrackerType: ConversionTrackerServiceType,
  conversionTagId: z.number().int().nullable(),
  conversionTagName: z.string().nullable(),
  status: ConversionTrackerServiceStatus
}).nullable();

export type ConversionGroupServiceConversion = z.infer<typeof ConversionGroupServiceConversion>;
