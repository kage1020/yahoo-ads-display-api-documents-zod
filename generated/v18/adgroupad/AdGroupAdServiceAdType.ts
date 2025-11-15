import { z } from 'zod';

export const adGroupAdServiceAdType = z.enum(["BANNER_AD", "CAROUSEL_AD", "DYNAMIC_DISPLAY_AD", "RESPONSIVE_AD", "TEXT_AD", "RESPONSIVE_GAIN_FRIENDS_AD", "CAROUSEL_GAIN_FRIENDS_AD", "INSTREAM_AD", "UNKNOWN"]).nullable();

export type AdGroupAdServiceAdType = z.infer<typeof adGroupAdServiceAdType>;
