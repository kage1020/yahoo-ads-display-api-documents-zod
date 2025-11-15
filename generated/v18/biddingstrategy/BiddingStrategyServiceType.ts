import { z } from 'zod';

export const biddingStrategyServiceType = z.enum(["MAXIMIZE_CONVERSIONS", "MAXIMIZE_CONVERSION_VALUE", "MAXIMIZE_CLICKS", "MAXIMIZE_VIDEO_VIEWS", "MAXIMIZE_VIEWABLE_IMPRESSIONS", "MAXIMIZE_GAINING_FRIENDS", "CPC", "UNKNOWN"]).nullable();

export type BiddingStrategyServiceType = z.infer<typeof biddingStrategyServiceType>;
