import { z } from 'zod';

export const conversionTrackerServiceAppConversionPlatform = z.enum(["ITUNES", "ANDROID_MARKET", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppConversionPlatform = z.infer<typeof conversionTrackerServiceAppConversionPlatform>;
