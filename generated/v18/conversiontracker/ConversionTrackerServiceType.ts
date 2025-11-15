import { z } from 'zod';

export const ConversionTrackerServiceType = z.enum(["WEB_CONVERSION", "APP_CONVERSION", "IMPORT_CONVERSION", "LY_TAG_CONVERSION", "UNKNOWN"]).nullable();

export type ConversionTrackerServiceType = z.infer<typeof ConversionTrackerServiceType>;
