import { z } from 'zod';

export const mediaServiceCampaignBannerFlg = z.enum(["FALSE", "TRUE", "UNKNOWN"]).nullable();

export type MediaServiceCampaignBannerFlg = z.infer<typeof mediaServiceCampaignBannerFlg>;
