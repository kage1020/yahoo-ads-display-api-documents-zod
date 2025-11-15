import { z } from 'zod';

import { conversionTrackerServiceAppConversionPlatform } from './ConversionTrackerServiceAppConversionPlatform';

export const conversionTrackerServiceAppConversion = z.object({
  appConversionPlatform: conversionTrackerServiceAppConversionPlatform,
  appId: z.string().nullable()
}).nullable();

export type ConversionTrackerServiceAppConversion = z.infer<typeof conversionTrackerServiceAppConversion>;
