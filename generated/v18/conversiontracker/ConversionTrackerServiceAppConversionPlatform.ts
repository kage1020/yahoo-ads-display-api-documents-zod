import { z } from 'zod';

export const ConversionTrackerServiceAppConversionPlatform = z.enum(["ITUNES", "ANDROID_MARKET", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceAppConversionPlatform = z.infer<typeof ConversionTrackerServiceAppConversionPlatform>;
