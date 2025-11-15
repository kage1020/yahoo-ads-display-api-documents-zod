import { z } from 'zod';

export const CampaignServiceBiddingStrategyType = z.enum(["MAXIMIZE_CONVERSIONS", "MAXIMIZE_CONVERSION_VALUE", "MAXIMIZE_CLICKS", "MAXIMIZE_VIDEO_VIEWS", "MAXIMIZE_VIEWABLE_IMPRESSIONS", "MAXIMIZE_GAINING_FRIENDS", "VCPM", "CPC", "CPV", "CPF", "UNKNOWN"]).nullable();

export type CampaignServiceBiddingStrategyType = z.infer<typeof CampaignServiceBiddingStrategyType>;
