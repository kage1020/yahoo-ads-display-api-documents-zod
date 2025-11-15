import { z } from 'zod';

import { mediaServiceApprovalStatus } from './MediaServiceApprovalStatus';
import { mediaServiceCampaignBannerFlg } from './MediaServiceCampaignBannerFlg';
import { mediaServiceLogoFlg } from './MediaServiceLogoFlg';
import { mediaServiceImageMedia } from './MediaServiceImageMedia';
import { mediaServiceThumbnailFlg } from './MediaServiceThumbnailFlg';
import { mediaServiceUserStatus } from './MediaServiceUserStatus';
import { mediaServiceRichFormatFlg } from './MediaServiceRichFormatFlg';

export const mediaServiceRecord = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: mediaServiceApprovalStatus,
  campaignBannerFlg: mediaServiceCampaignBannerFlg,
  reviewApplicationDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  logoFlg: mediaServiceLogoFlg,
  imageMedia: mediaServiceImageMedia,
  mediaId: z.number().int().nullable(),
  mediaName: z.string().nullable(),
  mediaTitle: z.string().nullable(),
  thumbnailFlg: mediaServiceThumbnailFlg,
  userStatus: mediaServiceUserStatus,
  mediaRichFormatFlg: mediaServiceRichFormatFlg,
  createdDate: z.string().nullable()
}).nullable();

export type MediaServiceRecord = z.infer<typeof mediaServiceRecord>;
