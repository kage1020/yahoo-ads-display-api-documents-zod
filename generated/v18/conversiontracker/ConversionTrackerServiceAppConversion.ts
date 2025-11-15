import { z } from 'zod';

import { ConversionTrackerServiceAppConversionPlatform } from './ConversionTrackerServiceAppConversionPlatform';

export const ConversionTrackerServiceAppConversion = z.object({
  appConversionPlatform: ConversionTrackerServiceAppConversionPlatform,
  appId: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppConversion = z.infer<typeof ConversionTrackerServiceAppConversion>;
