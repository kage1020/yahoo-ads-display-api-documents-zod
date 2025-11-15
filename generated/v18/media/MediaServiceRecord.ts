import { z } from 'zod';

import { MediaServiceApprovalStatus } from './MediaServiceApprovalStatus';
import { MediaServiceCampaignBannerFlg } from './MediaServiceCampaignBannerFlg';
import { MediaServiceLogoFlg } from './MediaServiceLogoFlg';
import { MediaServiceImageMedia } from './MediaServiceImageMedia';
import { MediaServiceThumbnailFlg } from './MediaServiceThumbnailFlg';
import { MediaServiceUserStatus } from './MediaServiceUserStatus';
import { MediaServiceRichFormatFlg } from './MediaServiceRichFormatFlg';

export const MediaServiceRecord = z.object({
  accountId: z.number().int().nullable(),
  approvalStatus: MediaServiceApprovalStatus,
  campaignBannerFlg: MediaServiceCampaignBannerFlg,
  reviewApplicationDate: z.string().nullable(),
  disapprovalReasonCodes: z.array(z.string().nullable()).nullable(),
  logoFlg: MediaServiceLogoFlg,
  imageMedia: MediaServiceImageMedia,
  mediaId: z.number().int().nullable(),
  mediaName: z.string().nullable(),
  mediaTitle: z.string().nullable(),
  thumbnailFlg: MediaServiceThumbnailFlg,
  userStatus: MediaServiceUserStatus,
  mediaRichFormatFlg: MediaServiceRichFormatFlg,
  createdDate: z.string().nullable()
}).nullable();

export type MediaServiceRecord = z.infer<typeof MediaServiceRecord>;
