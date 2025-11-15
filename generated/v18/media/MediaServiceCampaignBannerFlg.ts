import { z } from 'zod';

export const MediaServiceCampaignBannerFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceCampaignBannerFlg = z.infer<typeof MediaServiceCampaignBannerFlg>;
